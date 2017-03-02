#!/usr/bin/python
# -*- coding: utf-8 -*-
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
# Make the images export more effectively
import sys
sys.path.append('/home/joereddington/')
from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE_TYPE
from pprint import pprint
import json
import zipfile
import io
import os
import math
import string
import unicodedata
from PIL import Image
from sys import argv
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE


import sys
import linecache
print_exceptions = False
IMAGE_WARNING = False
bordercolor = False

warningMissingLinks = True


def PrintException():
        # http://stackoverflow.com/a/20264059
        if print_exceptions is True:
                exc_type, exc_obj, tb = sys.exc_info()
                f = tb.tb_frame
                lineno = tb.tb_lineno
                filename = f.f_code.co_filename
                linecache.checkcache(filename)
                line = linecache.getline(filename, lineno, f.f_globals)
                print 'EXCEPTION IN ({}, LINE {} "{}"): {}'.format(filename, lineno, line.strip(), exc_obj)


def resizeImage(image, scaleFactor):

        oldSize = image.size
        newSize = (scaleFactor*oldSize[0],
                   scaleFactor*oldSize[1])
        return image.resize(newSize, Image.ANTIALIAS)


def remove_punctuation(s):
        """
        >>> strip_punctuation(u'something')
        u'something'

        >>> strip_punctuation(u'something.,:else really')
        u'somethingelse really'
        """
        text = s
        if not isinstance(s, type(u"hope")):
                text = unicode(s, "utf-8")
        punctutation_cats = set(['Pc', 'Pd', 'Ps', 'Pe', 'Pi', 'Pf', 'Po'])
        return ''.join(x for x in text
                       if unicodedata.category(x) not in punctutation_cats)


def make_title(label):
        """Given a  string, returns the string in the format we use for
         identifying grids. This is used mostly to build internal link
         structures"""
        tag = remove_punctuation(label.lower().strip().replace(" ", "_"))
        if tag == "":
                tag = "unknown"
        return tag


class Grid:

        """Class representing on n by n grid, complete with utterances, links
        colours, and so on. Currently outputs as javascript, should also
        write to json on it's own mertits"""

        def update_links(self, grids):
                for col in range(self.grid_size):
                        for row in range(self.grid_size):
                                current = self.links[row][col]
                                if "slide" in current:
                                        # first extract the number
                                        number_string = ''.join(
                                            c for c in current
                                            if c in string.digits)
                                        # print number_string
                                        # print "which is", grids[int(number_string)].tag
                                        # Then work out the relevant tag
                                        self.links[row][col] = make_title(
                                            grids[int(number_string)-1].tag)
                                        # Remember that slides are numbered from
                                        # 1 but grids are numbered from 0

        def __init__(self, pres, slide, gridSize):
                self.grid_size = gridSize
                self.labels = [
                    ["" for x in range(self.grid_size)]
                    for x in range(self.grid_size)]
                self.utterances = [
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
                self.tag = "unknown"
                self.slide_width = pres.slide_width
                self.slide_height = pres.slide_height
                for shape in slide.shapes:
                        self.process_shape(shape)

        def get_col_row(self, top, left):
                # It doesn't make sense to use width and height, since often the
                # midpoint lies outside the cell, particularly in the horizontal directino
                # (probably because text boxes have a default minimum width)
                # It might be worth having a slight fudge right-and-down to make sure
                # we don't miss items who are just outside the top left of the
                # cell.
                col = math.floor(
                    (left * self.grid_size / self.slide_width) + 0.5)
                row = math.floor(
                    (top * self.grid_size / self.slide_height) + 0.5)
                return (int(col), int(row))

        def process_shape(self, shape):
                # print str(shape.top)+" "+str(shape.left)
                try:
                        if shape.is_placeholder:
                                if shape.placeholder_format.idx == 0:
                                        self.tag = shape.text
                                        # should there be a return here?
                        (co, ro) = self.get_col_row(
                                shape.top+shape.height/2, shape.left+shape.width/2)
                        if ((co >= gridSize) or (ro >= gridSize)):
                                print "Warning, shape outside of page area on page:{}".format(self.tag)
                                return
                        # Now - let's find out if there is a link...
                        click_action = shape.click_action
                        if click_action.hyperlink.address is not None:
                                self.links[co][
                                        ro] = click_action.hyperlink.address
                        if shape.shape_type == MSO_SHAPE_TYPE.AUTO_SHAPE:
                                if hasattr(shape.fill, 'fore_color'):
                                        if (str(shape.fill.fore_color.type)
                                                == "SCHEME (2)"):
                                                #self.colors[co][ro] = ( 200, 0, 0)
                                                pass
                                        elif (str(shape.fill.fore_color.type) == "RGB (1)"):
                                                # "We can use this color"
                                                if bordercolor:
                                                        self.colors[co][
                                                                ro] = shape.line.color.rgb
                                                else:
                                                        self.colors[co][
                                                                ro] = shape.fill.fore_color.rgb

                                        else:
                                                print "Something new has happened."
                                                print "A"+str(shape.fill.fore_color.type)+"A"

                        if shape.has_text_frame:
                                self.process_text_frame(shape, co, ro)

                        if(warningMissingLinks):
                                if (click_action.hyperlink.address is None):
                                        if shape.shape_type == MSO_SHAPE_TYPE.AUTO_SHAPE:
                                                if shape.auto_shape_type == MSO_SHAPE.FOLDED_CORNER:
                                                        if len(self.links[
                                                               co][ro]) < 1:
                                                                print self.tag + " link here: [{}] [{}] {} ".format(co, ro, self.labels[co][ro]) + self.links[co][ro]

                except (AttributeError, KeyError, NotImplementedError):
                        PrintException()
                        return

        def process_text_frame(self, shape, co, ro):
                text = ""
                if "Yes" in self.labels[co][ro]:
                        return
                for paragraph in shape.text_frame.paragraphs:
                        text += "".join([run.text.replace(u"’", u"'")
                                         for run in paragraph.runs])
                if text != "":
                        # add the if shape_type is text box
                        self.labels[co][ro] = text.strip()


def export_images(grids, slide_number, slide, filename, SAVE=True):
        """     Second pass through shapes list finds images and saves them.
        We have to do this separately so it's guaranteed we already know what to
        name the images!"""
        grid = grids[slide_number]
        images = {}
        labels = grid.labels
        print "Extracting Symbols {}".format(slide_number)
        for shape in slide.shapes:
                try:
                        if not hasattr(shape, "shape_type"):
                                continue

                        if shape.shape_type == MSO_SHAPE_TYPE.PICTURE:
                                (co, ro) = grid.get_col_row(
                                        shape.top+shape.height/2, shape.left+shape.width/2)
                                if (co, ro) not in images:
                                        images[co, ro] = []
                                images[co, ro].append(shape)
                except:
                        print "exception 23204234 triggered"
                        continue
        if IMAGE_WARNING:
                for col in range(grid.grid_size):
                        for row in range(grid.grid_size):
                                if (col, row) not in images:
                                        if labels[col][row] is not "":
                                                if grid.tag not in labels[
                                                        col][row]:
                                                        print "WARNING: image missing at column {}, row  {} (label: {}) on slide:{}".format(col, row, labels[col][row], grid.tag)

        # Compose each icon out of all the images in the grid cell.
        for (x, y) in images:
                # Go through all the images, compute bounding
                # box.
                l = min([shape.left for shape in images[x, y]])
                t = min([shape.top for shape in images[x, y]])
                r = max([shape.left +
                         shape.width for shape in images[x, y]])
                b = max([shape.top +
                         shape.height for shape in images[x, y]])

                # Scale gives us the mapping from image pixels to powerpoint
                # distance units. This depends on the resolution
                # of the images.
                scale = min([shape.width/shape.image.size[0]
                             for shape in images[x, y]])

                # Size of combined image, in actual pixels (not PPTX units)
                # If scales differ between objects, we resize
                # them next
                w = (r-l)/scale
                h = (b-t)/scale
                composite = Image.new('RGBA', (w, h))

                # Add all the images together.
                for shape in images[x, y]:
                                        # TODO: flipping.
                        try:
                                part = Image.open(
                                    io.BytesIO(
                                        shape.image.blob))
                                part.load()
                                width = part.size[0]
                                height = part.size[1]
                                left = shape.crop_left*width
                                right = (1-shape.crop_right)*width
                                top = shape.crop_top*height
                                bottom = (1-shape.crop_bottom)*height
                                box = (int(left),
                                       int(top),
                                       int(right),
                                       int(bottom))
                                part = part.crop(box)
                                partScale = (shape.width / part.size[0])
                                # part.size because it might have been cropped
                                part = resizeImage(part, partScale / scale)
                                composite.paste(
                                    part,
                                    ((shape.left - l)/scale,
                                     (shape.top - t)/scale))
        # part.split()[0])  # This masks out transparent pixels
                        except IOError:
                                print "Error reading image for {} {}".format(x, y)
                        except ValueErrorr:
                                print "Error reading image for {} {}".format(x, y)

                # Crop final image.
                bbox = composite.getbbox()
                composite = composite.crop(bbox)

                # Save!
                grid.icons[x][
                        y] = "data/images/" + create_icon_name(x, y, labels, grid.links, slide_number)
                name = create_icon_name(x, y, labels, grid.links, slide_number)
                # print name
                if SAVE:
                        folder = filename+"/data/images/"  # + str(slide_number)
                        if not os.path.exists(folder):
                                os.makedirs(folder)
                        composite.save(folder + "" + name)


def create_json_object(grids):
        # Start the JSON output.
        grid_json = {}
        for i in range(len(grids)):
                grid_json[i] = [
                    make_title(
                        grids[i].tag),
                    grids[i].labels,
                    grids[i].utterances,
                    grids[i].links,
                    grids[i].icons,
                    grids[i].colors,
                    i]

        for_json = {}
        for_json["Settings"] = [gridSize, "test title", "en", ""]
        for_json["Grid"] = grid_json
        return for_json


def create_obf_manifest(boards_names_dic, image_names_dic, dest):
        # Create the manifest
        root = boards_names_dic['toppage']
        string_of_board_names = json.dumps(boards_names_dic)
        string_of_image_names = json.dumps(image_names_dic)
        print string_of_board_names
        print "XXXXXXXXXXXXXXX"
        with open(dest+"/data/manifest.json", "w") as manifest:
                manifest.write("""{{
  "format": "open-board-0.1",
  "root": "{}",
  "paths": {{
    "boards":
      {},
"images":
{}

  }}
}}""".format(root, string_of_board_names, string_of_image_names))


def create_obf_object(grid):
        # Start the JSON output.
        for_json = {}
        for_json["format"] = "open-board-0.1"
        for_json["name"] = "CommuniKate "+make_title(grid.tag)
        for_json["locale"] = "en"
        for_json["id"] = make_title(grid.tag)
        for_json["grid"] = {}
        for_json["images"] = []
        for_json["sounds"] = []
        for_json["grid"]["rows"] = gridSize
        for_json["grid"]["columns"] = gridSize
        for_json["buttons"] = []
        ovfgrid = []
        for row in range(gridSize):
                grid_row = []
                for col in range(gridSize):
                        if (len(grid.labels[col][row]) > 0):
                                button = {}
                                id = "{}{}".format(col, row)
                                button["id"] = id
                                grid_row.append(id)
                                button["label"] = grid.labels[col][row]
                                button["border_color"] = "rgb(68,68,68)"
                                hope = str(type(grid.colors[col][row]))
                                if("pptx" in hope):
                                        color = grid.colors[col][row]
                                        button["background_color"] = "rgb({},{},{})".format(
                                            color[0], color[1], color[2])
                                else:
                                        button["background_color"] = "rgb(0,0,0)"
                                button["image_id"] = grid.icons[col][row]
                                if len(grid.links[col][row]) > 1:
                                   if "special::" not in grid.links[col][row]:
                                      if "ovf(" not in grid.links[col][row]:
                                        button["load_board"]= { "path": "boards/"+grid.links[col][row]+".obf" }


                                for_json["buttons"].append(button)
                        else:
                                grid_row.append(None)
                ovfgrid.append(grid_row)
        for_json["grid"]["order"] = ovfgrid
        images=[]

        #  for row in range(gridSize):
        #          for col in range(gridSize):
        #              if (len(grid.icons[col][row])>2):
        img = {}
        img["content_type"] = "image/png"
        #                  id = "{}{}image".format(col, row)
        img["id"] = grid.icons[col][row]
        img["width"] = 300
        img["height"] = 300
        img["path"]=grid.icons[col][row]
        images.append(img)
        for_json["images"]=images
        return for_json


def write_to_obf(grids, dest):
        #Lots of relative addressing going on here.
        boards_names_dic = {}
        image_names_dic = {}
        owd = os.getcwd()
        for tok in grids:
                for_json = create_obf_object(tok)
                for image in for_json["images"]:
                     image_names_dic[image['id']]=image['path']
                filename = 'boards/'+make_title(tok.tag)+'.obf'
                boards_names_dic[make_title(tok.tag)]=filename
                filename = filename.encode('ascii', 'ignore')
                with open(dest+'/data/'+filename, 'w') as outfile:
                        json.dump(for_json, outfile, sort_keys=True, indent=2)
        create_obf_manifest(boards_names_dic,image_names_dic, dest)
        os.chdir(dest+'/data')
        outzipfile = 'pageset.obz'
        boards_names_dic['manifest']='manifest.json' #no idea what this line does, definately needs some test/reactoring.
        with zipfile.ZipFile(outzipfile, "w") as w:
                for x in boards_names_dic.values():
                        print "Adding "+x
                        w.write(x)
        os.chdir(owd)




def write_to_JSON(grids, filename):
        for_json = create_json_object(grids)
        with open(filename, 'w') as outfile:
                json.dump(for_json, outfile, sort_keys=True, indent=4)


def create_icon_name(x, y, labels, links, slide_number):
        name = "S"+str(slide_number)+"X"+str(x)+"Y"+str(y)+make_title(
                labels[x][y]).encode('ascii', 'ignore')+".png"
        return name


def extract_and_label_images(prs, grids, filename, SAVE=True):
        # Deal with the images
        image_slide_number = 0
        for slide in prs.slides:
                export_images(grids, image_slide_number, slide, filename, SAVE)
                image_slide_number += 1
        return grids


def extract_grid(prs):
        grids = []
        debug_no = 0
        for slide in prs.slides:
                debug_no += 1
                print "Slide: {}".format(debug_no)
                grids.append(Grid(prs, slide, gridSize))
        debug_no = 0
        for tok in grids:
                debug_no += 1
                tok.update_links(grids)
                for i in range(gridSize):
                        for j in range(gridSize):

                                if(tok.colors[j][i] == (200, 0, 0)):
                                        print "Missing colour in {}: {},{} - {} ".format(tok.tag.encode('ascii', 'ignore'), j, i, tok.labels[j][i].encode('ascii', 'ignore'))
                                        print tok.colors[j][i]
        return grids
########

if __name__ == "__main__":
        if (len(sys.argv) < 2):
                print("\nUsage: ./grab_text.py <inputPptxFile> <gridSize>\n")
                print("inputPptxFile: The powerpoint pageset you want to process.")
                print("gridSize: width of square grid, e.g. '4' for a 4x4 grid")
                sys.exit(1)

        filename = sys.argv[1]
        dest = sys.argv[2]
        gridSize = 5
        if (len(sys.argv) > 2):
                gridSize = int(sys.argv[3])

        prs = Presentation(filename)
        grids = extract_grid(prs)
        grids = extract_and_label_images(prs, grids, dest)
        write_to_JSON(grids, dest+'/pageset.json')
        write_to_obf(grids, dest)

        # vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
