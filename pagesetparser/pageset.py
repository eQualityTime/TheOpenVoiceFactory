from pagesetparser.grid import Grid
from pagesetparser.core import make_title
from pptx import Presentation
import pptx 
import zipfile
import io
import os
import json
import urllib
import logging

logger = logging.getLogger(__name__)


# TODO Pageset does NOT have a dedicated test file (it's covered by the regressions) 

class Pageset:

    def __init__(self, filename, grid_size, saveimages=True):  
        try: 
            self.prs = Presentation(filename)
        except:
            # TODO: should throw error if filename doesn't create a useable pageset
            logger.error("Presentation file doesn't match expected format ({})".format(filename)) 
            raise ValueError("Presentation file doesn't match expected format ({})".format(filename)) 
        self.grids = []
        self.feedback_raw = []
        self.split_pageset_into_grids(grid_size)
        self.get_image_names() #This has to run to get the names right. (for what?) 
        self.scan_for_duplicates() #Just to add to the feedback 
        self.grid_by_titles={}
        for grid in self.grids:
            self.grid_by_titles[grid.title]=grid

    def addfeedback(self, feedelement):
        self.feedback.append(feedelement)
        logger.warning("Feedback added :{}".format(feedelement))


    @property
    def feedback(self):
        return self.feedback_raw


    @property
    def feedback_as_html(self):
        feedback_html = ["<ul>"]
        for message in self.feedback:
            color = "black"
            if "warning" in message.lower():
                color = "#FFBF00"  # Using amber for warnings
          
            elif "error" in message.lower():
                color = "red"
            feedback_html.append(f'  <li style="color: {color};">{message}</li>')
        feedback_html.append("</ul>")
        return "\n".join(feedback_html)



    def split_pageset_into_grids(self,grid_size):  
        for index,slide in enumerate(self.prs.slides):
            self.grids.append(Grid(self.prs, slide, grid_size, self,index)) 
        for grid in self.grids:
            grid.update_links(self.grids) # We can only run this after every other page knows their own tag. 

    def get_image_names(self):  
        for i in range(len(self.grids)):
            self.grids[i].make_imagepaths()

    def get_obf_manifest(self,boards_names_dic, image_names_dic):
        string_of_board_names = json.dumps(boards_names_dic,ensure_ascii=False)
        string_of_image_names = json.dumps(image_names_dic,ensure_ascii=False) #The image manifest THING is crazy - find out what's happening there... 
        return """{{
"format": "open-board-0.1",
"root": "boards/{}.obf",
"paths": {{
"boards":
{},
"images":
{}

}}
}}""".format(self.grids[0].title, string_of_board_names, string_of_image_names)


    def write_to_obz(self, dest):
        owd = os.getcwd()
        image_names_dic = {}
        for grid in self.grids: 
            grid.export_images(dest)
            grid.write_obf_file(dest) 
            for path in grid.get_image_paths():
                image_names_dic[path]=path
        boards_names_dic={grid.title:'boards/{}.obf'.format(grid.title) for grid in self.grids}
        with io.open(dest+"manifest.json", "w") as manifest:
            manifest.write(self.get_obf_manifest(boards_names_dic,image_names_dic))
        boards_names_dic['manifest']='manifest.json'  #TODO: this is a hack, put it two lines below, but check by properly uploading it. 
        os.chdir(dest)
        try:
            with zipfile.ZipFile('pageset.obz', "w") as w:
                for x in list(boards_names_dic.values()):
                    w.write(x)
                for y in list(image_names_dic.keys()): 
                    x=y.replace("../data/","")
                    w.write(x) 
        except FileNotFoundError: #The try-except block is here so that we always change back to the right directory if there is an error. 
            logger.error("Error in write_to_obf on file {}".format(x))
        os.chdir(owd)

    def scan_for_duplicates(self):
        title_indices = {}  # Dictionary to store the indices of each title
        for index, grid in enumerate(self.grids):
            title = grid.title
            if title in title_indices:
                title_indices[title].append(index)
            else:
                title_indices[title] = [index]

        # Find and print pairs of grids with the same title
        for title, indices_with_title in title_indices.items():
            if len(indices_with_title) > 1:
                indices_line = ", ".join(str(index) for index in indices_with_title)
                self.addfeedback(f"Warning: duplicate page label: {title} - Indices: {indices_line}")

    def find_titles_without_links(self):
        # Slides that aren't reachable but that have the same name as a reachable one, won't be found
        from collections import deque #don't need this anywhere else 
        # Create a set of all titles in self.grids
        seen = deque() 
        seen.append(self.grids[0].title) 
        slides_status={} #All values must be one of 'missing','seen', and 'processed'
        for grid in self.grids:
            slides_status[grid.title]="missing"
        slides_status[self.grids[0].title]="seen"
        while seen: 
            current_grid=self.return_grid_by_title(seen.popleft())
            for link in current_grid.return_links():
                try:
                    if slides_status[link]!="seen":
                        slides_status[link]="seen"
                        logger.debug(f"The page {link} is reachable from the page {current_grid.title}")
                        seen.append(link)
                        logger.debug("We haven't seen it so adding it to the queue") 
                    else:
                        logger.debug(f"We've seen {link} before so we aren't adding it")
                        pass
                except KeyError:
                    pass #mostly "" because there's NO link, or a special command
        titles_of_unreachable_grids=[key for key, value in slides_status.items() if value=="missing"]
        for title in titles_of_unreachable_grids:
            self.addfeedback(f"Page with title '{title}' is unreachable")
        return titles_of_unreachable_grids


    def return_grid_by_title(self,title):
        return self.grid_by_titles[title] #TODO expand with some safety

