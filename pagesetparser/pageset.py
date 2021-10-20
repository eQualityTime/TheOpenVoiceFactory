from pagesetparser.grid import Grid
from pagesetparser.core import make_title
from pptx import Presentation
from PIL import Image
import json
import io
import os
import urllib

class Pageset:

    # TODO: should throw error if filename doesn't create a useable pageset

    def __init__(self, filename, dest, grid_size, saveimages=True):  #TODO: dest needs to go, it's needed for output NOT input
        self.prs = Presentation(filename)
        self.grids = []
        self.grid_size=grid_size #TODO: we might NOT need to store this internally
        self.feedback = []
        self.split_pageset_into_grids()
        self.extract_and_label_images(dest, False) #This has to run to get the names right. TODO Call from somewhere else

    def addfeedback(self, feedelement):
        self.feedback.append(feedelement)
        print("Feedback added :{}".format(feedelement))

    def getfeedback(self):
        return self.feedback

    def split_pageset_into_grids(self):  
        for index,slide in enumerate(self.prs.slides):
            initial_tag="Slide number "+str(index+1)   #TODO - put this default bit into the grid and pass the actual index.
            self.grids.append(Grid(self.prs, slide, self.grid_size, self,initial_tag)) 
        for grid in self.grids:
            grid.update_links(self.grids) # We can only run this after every other page knows their own tag. 

    def extract_and_label_images(self, dest, SAVE=True):  #TODO: this should only be called from one of the proper export files.
        image_slight_number = 0  #TODO sort out the fucking spelling 
        for slide in self.prs.slides: #TODO - you'll note that we don't use the slide in the loop...
            export_images(
                self.grids[image_slight_number],
                image_slight_number, #TODO: why do we need the slide number if we know the tag? 
                dest,
                SAVE)
            image_slight_number += 1

    def to_json(self):  #TODO: put in pageset and then put the inner loop in grid 
        # Start the JSON output.
        grid_json = {}
        grids=self.grids
        for i in range(len(grids)):
            grid_json[i] = [
                grids[i].tag,
                grids[i].labels,
                grids[i].links,
                grids[i].icons,
                grids[i].colors,
                i]
        for_json = {}
        for_json["Settings"] = [self.grid_size, "test title", "en", ""]
        for_json["Grid"] = grid_json
        return for_json

    def write_json(self, filename):
        with open(filename, 'w') as outfile:
            json.dump(self.to_json(), outfile, sort_keys=True, indent=4)

def export_images(grid, slide_number, dest_folder, SAVE=True): #TODO: this is a massive function and needs to be in more separate segments
    """     Second pass through shapes list finds images and saves them.
    We have to do this separately so it's guaranteed we already know what to
    name the images!"""
    labels = grid.labels
    images = grid.create_image_grid()
    #TODO: everything in this function should be in the invididual grid class
    # Compose each icon out of all the images in the grid cell.
    for (x, y) in images:   #TODO: Move this for loop into it's own function
        # Go through all the images, compute bounding box.
        l = min([shape.left for shape in images[x, y]]) #TODO: rename all these single letter variables
        t = min([shape.top for shape in images[x, y]])
        r = max([shape.left + shape.width for shape in images[x, y]])
        b = max([shape.top + shape.height for shape in images[x, y]])
        # Scale gives us the mapping from image pixels to powerpoint
        # distance units. This depends on the resolution of the images.
        scale = min([shape.width/shape.image.size[0]
                     for shape in images[x, y]])
        # Size of combined image, in actual pixels (not PPTX units)
        # If scales differ between objects, we resize them next
        w = int((r-l)/scale)
        h = int((b-t)/scale)
        try:
            composite = Image.new('RGBA', (w, h))
            # Add all the images together.
            for shape in images[x, y]:
                partBox=ready_for_composite(shape,scale,w,h,l,t)
                composite=Image.alpha_composite(composite,partBox)
            # Crop final image.
            bbox = composite.getbbox()
            composite = composite.crop(bbox)
            # Save!
            grid.icons[x][y] = "images/" + create_icon_name(x, y, labels, grid.links, slide_number) #TODO: this line could be in create_image_grid and probably should be.
            name =                  create_icon_name(x, y, labels, grid.links, slide_number) #TODO rename grid.icons - it's the imagepaths
            if SAVE:
                folder = dest_folder+"/images/"
                if not os.path.exists(folder):
                    os.makedirs(folder)
                composite.save(folder + "" + name)
        except IOError as e:
            print("Error reading image for {} {} (Code 121)".format(x, y))
            if ("cannot find loader for this WMF file" in str(e)):
                print("Error: it appears that the image in column {} row {} of slide {}, is for Windows only, please change the format of that image".format(x, y, slide_number))
            if ("cannot identify image file" in str(e)):
                print("Error: it appears that the image in column {} row {} of slide {}, is for Windows only, please change the format of that image".format(x, y, slide_number))
        except ValueError:
            print("Error reading image for {} {} (Code 127)".format(x, y))
        except IndexError:
            print("Error reading image for {} {}- it is outside the grid".format(x, y))


 #TODO: work out where these functions should be
def ready_for_composite(shape,scale,w,h,l,t):

    part = Image.open(
        io.BytesIO(
            shape.image.blob))
    part.load()
    part = part.crop(crop_to_shape(shape,part))
    partScale = (shape.width / part.size[0])
    # part.size because it might have been cropped
    part = resizeImage(part, partScale / scale)
    partBox = Image.new('RGBA', (w, h))
    partBox.paste( part, (int((shape.left - l)/scale),int( (shape.top - t)/scale)))
    return partBox

def crop_to_shape(shape,part):
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
    return box


def resizeImage(image, scaleFactor):
    oldSize = image.size
    newSize = (int(scaleFactor*oldSize[0]),
               int(scaleFactor*oldSize[1]))
    return image.resize(newSize, Image.ANTIALIAS)

def create_icon_name(x, y, labels, links, slide_number): #TODO: don't have the string twice. 
    name = "S"+str(slide_number)+"X"+str(x)+"Y"+str(y)+".png" #TODO: this is a format
    try:
        name = "S"+str(slide_number)+"X"+str(x)+"Y"+str(y)+make_title(
                labels[x][y])+".png" 
    except IndexError:
        print("Create_icon_name was given an x y that was outside the possible ranges")  #TODO: this isn't the right error message
    return name
