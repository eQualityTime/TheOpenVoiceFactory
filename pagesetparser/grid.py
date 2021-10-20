import math
import json
import urllib
import pagesetparser.core as core
import string
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE
from pptx.enum.dml import MSO_FILL

warningMissingLinks = True
bordercolor = False

class Grid:

    """Class representing on n by n grid, complete with utterances, links
    colours, and so on. """

    def __init__(self, pres, slide, grid_size, owningPageset,tag="unknown"):
        self.button_order=[(i, j) for i in range(grid_size) for j in range(grid_size)]
        self.slide=slide
        self.pageset = owningPageset
        self.grid_size = grid_size
        self.labels = [
            ["" for x in range(self.grid_size)]
            for x in range(self.grid_size)]
        self.links = [
            ["" for x in range(self.grid_size)]
            for x in range(self.grid_size)]
        self.colors = [
            ["" for x in range(self.grid_size)]
            for x in range(self.grid_size)]
        self.icons = [
            ["" for x in range(self.grid_size)]
            for x in range(self.grid_size)]
        self.tag = tag #"Unknown"
        self.slide_width = pres.slide_width
        self.slide_height = pres.slide_height
        for shape in slide.shapes:
            self.process_shape(shape)

    @property
    def title(self):
        return core.make_title(self.tag) 

    def get_col_row_by_num(self, top, left):  
        # It doesn't make sense to use width and height, since often the
        # midpoint lies outside the cell, particularly in the horizontal directino
        # (probably because text boxes have a default minimum width)
        # TODO This method is terrible - it worked fine with python 2.7, and when I upgraded to python3, the division caused problems. I fixed it by putting interger division *back*, which is clearly wrong but... 
     #   print("top: {}, left: {}, height: {}, width: {}".format(top,left,self.slide_height,self.slide_width))
        numberofrows=self.grid_size #forreadability  
        numberofcolumns=self.grid_size #forreadability  
        col = math.floor(
            (numberofcolumns * left // self.slide_width) + 0.5)
        row = math.floor(
            (numberofrows * top // self.slide_height) + 0.5)

        if ((col >= self.grid_size) or (row >= self.grid_size)):  
            raise ValueError("Shape outside of page area on page:{}".format(self.tag))
        return (int(col), int(row))

    def get_col_row(self,shape):
       return self.get_col_row_by_num(shape.top+shape.height/2, shape.left+shape.width/2)

    def process_shape(self, shape):
        try:
            if shape.is_placeholder:
                if shape.placeholder_format.idx == 0:
                    self.tag = core.make_title(shape.text)
            if shape.has_text_frame:  
                self.process_text_frame(shape)
            (co, ro) = self.get_col_row(shape)
            if shape.shape_type == MSO_SHAPE_TYPE.AUTO_SHAPE:
                if bordercolor:
                    self.colors[co][ro] = shape.line.color.rgb
                elif shape.fill.type==MSO_FILL.SOLID:
                    if (str(shape.fill.fore_color.type) != "SCHEME (2)"): 
                        self.colors[co][ro] = shape.fill.fore_color.rgb
            if shape.shape_type != MSO_SHAPE_TYPE.GROUP:
                click_action = shape.click_action
                if click_action.hyperlink.address is not None:
                    self.links[co][ro] = click_action.hyperlink.address

        except (ValueError, AttributeError, KeyError,  NotImplementedError):
            self.pageset.addfeedback(core.returnException())
            return

    def process_text_frame(self, shape):  
        text = ""
        (co,ro)=self.get_col_row(shape)
        if "Yes" in self.labels[co][ro]:  #This is a legacy hack - on one CK20 version (still used by some translations) there are multiple 'yes' labels on top of each other. Translators obviously only change the top one so this is here to make those translations work. 
            return
        for paragraph in shape.text_frame.paragraphs:
            text += "".join([run.text.replace("’", "'")
                             for run in paragraph.runs])  
        if text != "":
            self.labels[co][ro] = text.strip()

    def create_image_grid(self):
        images = {}
        for shape in self.slide.shapes:
            if not hasattr(shape, "shape_type"):
                continue
            if shape.shape_type == MSO_SHAPE_TYPE.PICTURE:
                (co, ro) = self.get_col_row(shape)
                images.setdefault((co,ro),[]).append(shape)
        return images


    def update_links(self, grids):  #TODO: the whole set of grids is passed in, that feels wrong - I want some way of looking up tag from slidenumber. 
        """the pptx file saves links to files 'slide1.xml', but we want them to point to the name of the boards."""
        for (col,row) in self.button_order:
            current = self.links[row][col]
            if "slide" in current:
                # first extract the number
                number= int(''.join( c for c in current if c in string.digits))
                # Then work out the relevant tag
                self.links[row][col] = grids[number - 1].tag
                # slides are numbered from 1 but grids are numbered from 0


    def write_obf_file(self,dest):
        for_json = self.create_obf_object()  #TODO: inline this line
        filename = 'boards/'+self.title+'.obf'
        with open(dest+filename, 'w') as outfile:
            json.dump(for_json, outfile, sort_keys=True, indent=2)


    def create_obf_object(self):
        for_json = {}
        for_json["format"] = "open-board-0.1"
        for_json["name"] = "CommuniKate "+self.title #TODO: i don't think communikate should be hardcoded
        for_json["locale"] = "en"
        for_json["id"] = self.title
        for_json["grid"] = {}
        for_json["images"] = []
        for_json["sounds"] = []
        for_json["grid"]["rows"] = self.grid_size
        for_json["grid"]["columns"] = self.grid_size
        for_json["buttons"] = []
        for_json["grid"]["order"] = []
        for row in range(self.grid_size):
            grid_row = []
            for col in range(self.grid_size):
                if (len(self.labels[col][row]) +len(self.links[col][row]) > 0): 
                    button=self.create_obf_button(col,row)
                    grid_row.append(button["id"])
                    for_json["buttons"].append(button)
                else:
                    grid_row.append(None)
            for_json["grid"]["order"].append(grid_row)

        for path in self.get_image_paths():
                    img = {}
                    img["content_type"] = "image/png" #TODO lookup other ways of defining a dictionary
                    img["id"] = path
                    img["width"] = 300
                    img["height"] = 300
                    img["path"]=path
                    for_json["images"].append(img)
        return for_json


    def get_image_paths(self):
        image_paths=[]
        for row in range(self.grid_size):
            for col in range(self.grid_size):
#        for (col,row) in self.button_order: #TODO - put this back and regenerate the obz files
                if (len(self.icons[col][row])>2):
                    image_paths.append(self.icons[col][row])
        return image_paths


    def create_obf_button(self,col,row): 
        def get_button_colour(colour): #TODO: inline this
            if("pptx" in str(type(colour))):
                return "rgb({},{},{})".format( colour[0], colour[1], colour[2])
            else:
                return "rgb(0,0,0)"
        button = {}
        button["id"] = "{}{}".format(col, row)
        button["label"] = self.labels[col][row]
        button["border_color"]= "rgb(68,68,68)"
        button["background_color"] = get_button_colour(self.colors[col][row])
        button["image_id"] = self.icons[col][row]
        if len(self.links[col][row]) > 1:
            if "special::" not in self.links[col][row]:  #TODO: I feel like we literally never use this. Drop it
                if not self.links[col][row].startswith("ovf("):
                    button["load_board"]= { "path": "boards/"+self.links[col][row]+".obf" }
                else:
                    core.process_commandstring(self.links[col][row],button)
        #This is at the end because we might change it during the special commands.
        if button["label"] is "": 
            button["label"]=button['id']
        return button



