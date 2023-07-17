from pagesetparser.grid import Grid
from pagesetparser.core import make_title
from pptx import Presentation
import pptx 
import zipfile
import io
import os
import json
import urllib



# TODO Pageset does NOT have a dedicated test file (it's covered by the regressions) 

class Pageset:

    def __init__(self, filename, grid_size, saveimages=True):  
        try: 
            self.prs = Presentation(filename)
        except:
            # TODO: should throw error if filename doesn't create a useable pageset
            print("Presentation file missing ({})".format(filename)) 
            return None
        self.grids = []
        self.feedback = []
        self.split_pageset_into_grids(grid_size)
        self.get_image_names() #This has to run to get the names right. (for what?) 

    def addfeedback(self, feedelement):
        self.feedback.append(feedelement)
        print("Feedback added :{}".format(feedelement))

    def getfeedback(self):
        return self.feedback

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
            print("Error in write_to_obf on file {}".format(x))
            print(x)
        os.chdir(owd)
