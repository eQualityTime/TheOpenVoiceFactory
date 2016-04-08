#!/usr/bin/python
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
# Make the images export more effectively
import sys
sys.path.append('/home/joereddington/')
from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE
from pptx.enum.action import PP_ACTION
import json
import io
import os
import math
import string
from PIL import Image
from sys import argv

import sys
import linecache
print_exceptions = False
IMAGE_WARNING = False


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

if (len(sys.argv) < 2):
        print("\nUsage: ./grab_text.py <inputPptxFile> <gridSize>\n")
        print("inputPptxFile: The powerpoint pageset you want to process.")
        print("gridSize: width of square grid, e.g. '4' for a 4x4 grid")
        sys.exit(1)

filename = sys.argv[1]
gridSize = 4
if (len(sys.argv) > 2):
        gridSize = int(sys.argv[2])

alpha = string.ascii_lowercase + string.ascii_uppercase + string.digits + '_'


def resizeImage(image, scaleFactor):

        oldSize = image.size
        newSize = (scaleFactor*oldSize[0],
                   scaleFactor*oldSize[1])
        return image.resize(newSize, Image.ANTIALIAS)


def remove_punctuation(s):
        """removes puncuation,
        provided by http://codereview.stackexchange.com/a/101806/4759"""
        return ''.join(c for c in s if c in alpha)


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
                                            grids[int(number_string)].tag)

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
                                        # shoudl there be a return here?
                        (co, ro) = self.get_col_row(shape.top, shape.left)
                        # Now - let's find out if there is a link...
                        click_action = shape.click_action
                        if click_action.hyperlink.address is not None:
                                self.links[co][
                                        ro] = click_action.hyperlink.address
                        if shape.shape_type == MSO_SHAPE_TYPE.AUTO_SHAPE:
                                try:
                                        self.colors[co][
                                                ro] = shape.fill.fore_color.rgb
                                except (TypeError):
                                        pass
                        if shape.has_text_frame:
                                self.process_text_frame(shape, co, ro)

                except (AttributeError, KeyError, NotImplementedError):
                        PrintException()
                        return

        def process_text_frame(self, shape, co, ro):
              #  text = self.utterances[co][ro]
                text = ""
                if "Yes" in self.labels[co][ro]:
                        return
                for paragraph in shape.text_frame.paragraphs:
                        text += "".join([run.text.encode('ascii', 'ignore')
                                         for run in paragraph.runs])
                if text != "":
                        # add the if shape_type is text box
                        self.labels[co][ro] = text.strip()


def export_images(grid, slide):
        """     Second pass through shapes list finds images and saves them.
        We have to do this separately so it's guaranteed we already know what to
        name the images!"""
        images = {}
        labels = grid.labels
        for shape in slide.shapes:
                try:
                        if not hasattr(shape, "shape_type"):
                                continue

                        if shape.shape_type == MSO_SHAPE_TYPE.PICTURE:
                                (co, ro) = grid.get_col_row(
                                        shape.top, shape.left)
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
                        part = Image.open(
                            io.BytesIO(
                                shape.image.blob))
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
                        try:
                                composite.paste(
                                    part,
                                    ((shape.left - l)/scale,
                                     (shape.top - t)/scale),
                                    part)  # This masks out transparent pixels
                        except ValueError:
                                print "Error reading image for " + utterances[x][y] + \
                                            "/" + links[x][y]

                # Crop final image.
                bbox = composite.getbbox()
                composite = composite.crop(bbox)

                # Save!
                grid.icons[x][
                        y] = "icons/" + create_icon_name(x, y, labels, grid.links)
                name = create_icon_name(x, y, labels, grid.links)
                # print name
                folder = filename+"/icons/"  # + str(slide_number)
                if not os.path.exists(folder):
                        os.makedirs(folder)
                composite.save(folder + "" + name)


def create_icon_name(x, y, labels, links):

        name = remove_punctuation(labels[x][y]) + ".png"
        if name == ".png":
                name = remove_punctuation(links[x][y])+".png"
                if name == ".png":
                        name = "unknown"+str(slide_number)+str(x)+str(y)+".png"
        return name

########


# target = open(filename, 'w')

########

prs = Presentation("uploads/"+filename)
slide_number = 1
for_json = {}
for_json["Settings"] = [4,"test title","en", ""]
grids = {}
for slide in prs.slides:
        grids[slide_number] = Grid(prs, slide, gridSize)
        export_images(grids[slide_number], slide)
        slide_number += 1

for i in range(1, slide_number):

        grids[i].update_links(grids)
        for_json[i] = [
            make_title(
                grids[i].tag),
            grids[i].labels,
            grids[i].utterances,
            grids[i].links,
            grids[i].icons,
            grids[i].colors,
            i]
with open(filename+'/pageset.json', 'w') as outfile:
        json.dump(for_json, outfile, sort_keys=True, indent=4)

# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
