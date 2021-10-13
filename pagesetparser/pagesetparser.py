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

def create_json_object(grids):
    # Start the JSON output.
    grid_json = {}
    for i in range(len(grids)):
        grid_json[i] = [
            grids[i].tag,
            grids[i].labels,
            grids[i].links,
            grids[i].icons,
            grids[i].colors,
            i]

    for_json = {}
    for_json["Settings"] = [gridSize, "test title", "en", ""]
    for_json["Grid"] = grid_json
    return for_json

def create_obf_manifest(root,boards_names_dic, image_names_dic, dest):
    # Create the manifest
#    root = boards_names_dic['toppage']
    string_of_board_names = json.dumps(boards_names_dic,ensure_ascii=False)
    string_of_image_names = json.dumps(image_names_dic,ensure_ascii=False)
    with io.open(dest+"manifest.json", "w") as manifest:
        manifest.write("""{{
"format": "open-board-0.1",
"root": "boards/{}.obf",
"paths": {{
"boards":
{},
"images":
{}

}}
}}""".format(root, string_of_board_names, string_of_image_names))



def get_button_colour(colour):
    if("pptx" in str(type(colour))):
        return "rgb({},{},{})".format( colour[0], colour[1], colour[2])
    else:
        return "rgb(0,0,0)"



def create_obf_button(grid,col,row):
    button = {}
    button["id"] = "{}{}".format(col, row)
    button["label"] = grid.labels[col][row]
    button["border_color"]= "rgb(68,68,68)"
    button["background_color"] = get_button_colour(grid.colors[col][row])
    button["image_id"] = grid.icons[col][row]
    if len(grid.links[col][row]) > 1:
        #print("The button has a link")
        if "special::" not in grid.links[col][row]:
            if not grid.links[col][row].startswith("ovf("):
                button["load_board"]= { "path": "boards/"+grid.links[col][row]+".obf" }
        #        print("    The link is to a board: {}".format(grid.links[col][row]))
            else:
                #It's a special commend. let's extract it.
                process_commandstring(grid.links[col][row],button)
    #This is at the end because we might change it during the special commands.
    if button["label"] is "": 
        button["label"]=button['id']

    return button

def process_commandstring(commandstring,button): 
    print("    The link is a special command")
    print("    The original line is : {}".format(commandstring))
    commandstring=commandstring[4:-1] #removes "ovf(" and ")" TODO, do proper replace
    print("    We strip to the command to get: {}".format(commandstring))
    commandstring=urllib.parse.unquote(commandstring)
    print("    We decode the link to get: {}".format(commandstring))
    import re 
    commands=re.split("\)\s*,",commandstring)
    #TODO use a proper parser https://stackoverflow.com/a/59995928/170243 
    print("    There are {} subcommands".format(len(commands)))
    for command in commands:
        process_single_command(command,button)  

def process_single_command(command,button): 
    command_name= command.split("(",1)[0]
    argument=command.split("(",1)[1][0:-1]
    print("        command name is {}".format(command_name))
    print("        argument is {}".format(argument))
    if command_name == "deleteword":
        #should find out what we do there...
        button["action"]=":deleteword"
    elif command_name == "backspace":
        button["action"]=":backspace"
    elif command_name == "clear":
        button["action"]=":clear"
    elif command_name == "place":
        print(argument)
        button["vocalization"] = button.setdefault("vocalization","")+argument.strip('"\'') #If there are multiple place commands, keep appending them.  
    elif command_name == "open":
        button["load_board"]= { "path": "boards/"+make_title(argument)+".obf" }
    elif command_name == "unfinnished":
         pass
    elif command_name == "blank":
         pass
    else:
        raise ValueError('Exception: Unknown special command_name ({}) to process in slide {} row {} col {}'.format(command_name, grid.tag,row, col))


def create_obf_object(grid):
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
    for_json["grid"]["order"] = []
    for row in range(gridSize):
        grid_row = []
        for col in range(gridSize):
            if (len(grid.labels[col][row]) +len(grid.links[col][row]) > 0): 
                button=create_obf_button(grid,col,row)
                grid_row.append(button["id"])
                for_json["buttons"].append(button)
            else:
                grid_row.append(None)
        for_json["grid"]["order"].append(grid_row)
        for col in range(gridSize):
            if (len(grid.icons[col][row])>2):
                img = {}
                img["content_type"] = "image/png"
                img["id"] = grid.icons[col][row]
                img["width"] = 300
                img["height"] = 300
                img["path"]=grid.icons[col][row]
                for_json["images"].append(img)
    return for_json


def write_to_obf(grids, dest):
    #Lots of relative addressing going on here.
    boards_names_dic = {}
    image_names_dic = {}
    owd = os.getcwd()
    root=make_title(grids[0].tag)
    #print("The title of the root board is {}".format(root)) 
    for tok in grids:
        for_json = create_obf_object(tok)
        for image in for_json["images"]:
            image_names_dic[image['id']]=image['path']
        filename = 'boards/'+make_title(tok.tag)+'.obf'
        boards_names_dic[make_title(tok.tag)]=filename
        #print("We are about to write the file {}".format(filename))
        with open(dest+filename, 'w') as outfile:
            json.dump(for_json, outfile, sort_keys=True, indent=2)
    create_obf_manifest(root,boards_names_dic,image_names_dic, dest)
    os.chdir(dest)
    outzipfile = 'pageset.obz'
    boards_names_dic['manifest']='manifest.json' #no idea what this line does, definately needs some test/reactoring.
    with zipfile.ZipFile(outzipfile, "w") as w:
        for x in list(boards_names_dic.values()):
            w.write(x)#.encode('utf8'))
        for y in list(image_names_dic.keys()):
            x=image_names_dic[y]
            x=x.replace("../data/","")
            image_names_dic[y]=x
            w.write(x) #.encode('utf8'))
    os.chdir(owd)




def write_to_JSON(grids, filename):
    for_json = create_json_object(grids)
    with open(filename, 'w') as outfile:
        json.dump(for_json, outfile, sort_keys=True, indent=4)


def create_ovf_manifest(filename):
    with open(filename, "w") as manifest:
        manifest.write("""{
"format": "open-board-0.1",
"root": "boards/my-board.ovf"
}""")


########
    # vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
