#!/usr/bin/python
# -*- coding: utf-8 -*-
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
# Make the images export more effectively
import sys
sys.path.append('/home/ovf/')
import json
import urllib.parse
from pagesetparser.core import make_title
from pagesetparser.pageset import Pageset
from pagesetparser.grid import Grid
import zipfile
import io
import os
from sys import argv
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE
from pptx.enum.dml import MSO_FILL

def write_obf_manifest(root,boards_names_dic, image_names_dic, dest): #TODO: doesn't need all these argeuments, should be a nested call (or actually inline) 
    with io.open(dest+"manifest.json", "w") as manifest:
        manifest.write(get_obf_manifest(root,boards_names_dic,image_names_dic))

def get_obf_manifest(root,boards_names_dic, image_names_dic):
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
}}""".format(root, string_of_board_names, string_of_image_names)


def write_to_obz(grids, dest): #TODO  This method should definitely be moved into pageset.py
     
    owd = os.getcwd()
    image_names_dic = {}
    for grid in grids: 
        grid.export_images(dest)
        grid.write_obf_file(dest) 
        for path in grid.get_image_paths():
            image_names_dic[path]=path
    boards_names_dic={grid.title:'boards/{}.obf'.format(grid.title) for grid in grids}
    write_obf_manifest(grids[0].title,boards_names_dic,image_names_dic, dest) 
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
        print("Error 23024982342 on file {}".format(x))
        print(x)
    os.chdir(owd)
