from pagesetparser.grid import Grid
from pagesetparser.core import make_title
from pptx import Presentation
import pptx 
import json
import urllib

class Pageset:


    def __init__(self, filename, grid_size, saveimages=True):  #TODO: dest needs to go, it's needed for output NOT input
        try: 
            self.prs = Presentation(filename)
        except:
            # TODO: should throw error if filename doesn't create a useable pageset
            print("Presentation file missing ({})".format(filename)) 
            return None
        self.grids = []
        self.grid_size=grid_size #TODO: we might NOT need to store this internally
        self.feedback = []
        self.split_pageset_into_grids()
        self.get_image_names() #This has to run to get the names right. TODO Call from somewhere else

    def addfeedback(self, feedelement):
        self.feedback.append(feedelement)
        print("Feedback added :{}".format(feedelement))

    def getfeedback(self):
        return self.feedback

    def split_pageset_into_grids(self):  
        for index,slide in enumerate(self.prs.slides):
            self.grids.append(Grid(self.prs, slide, self.grid_size, self,index)) 
        for grid in self.grids:
            grid.update_links(self.grids) # We can only run this after every other page knows their own tag. 

    def get_image_names(self):  #TODO: this should only be called from one of the proper export files.
        for i in range(len(self.grids)):
            self.grids[i].make_imagepaths()

    def to_json(self):  
        # Start the JSON output.
        grid_json = {}
        grids=self.grids
        for i in range(len(grids)):
            grid_json[i] = [
                grids[i].tag,
                grids[i].labels,
                grids[i].links,
                grids[i].imagepaths,
                grids[i].colors,
                i]
        for_json = {}
        for_json["Settings"] = [self.grid_size, "test title", "en", ""]
        for_json["Grid"] = grid_json
        return for_json

    def write_json(self, filename):
        with open(filename, 'w') as outfile:
            json.dump(self.to_json(), outfile, sort_keys=True, indent=4)

