#!/usr/bin/python
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
# Make the images export more effectively

from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE
import json
import io
import os
import string
import sys
import math
from PIL import Image

import sys
import linecache
print_exceptions=False

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

if (len(sys.argv) < 3):
        print("\nUsage: ./grab_text.py <inputPptxFile> <imageFileRoot> <gridSize>\n")
        print("inputPptxFile: The powerpoint pageset you want to process.")
        print("imageFileRoot: The file root for full page images, e.g. ck15/CK15+")
        print("    will save images for each slide with ck15/CK15+.%03d.png")
        print("gridSize: width of square grid, e.g. '4' for a 4x4 grid")
        sys.exit(1)

inputFile = sys.argv[1]
fileRoot = sys.argv[2]
gridSize = 4;
if (len(sys.argv) > 3):
        gridSize = int(sys.argv[3])
alpha = string.ascii_lowercase + string.digits + '_'


def resizeImage(image, scaleFactor):

        oldSize = image.size
        newSize = (scaleFactor*oldSize[0],
                   scaleFactor*oldSize[1])
        return image.resize(newSize, Image.ANTIALIAS)


def remove_punctuation(s):
        """removes puncuation,
        provided by http://codereview.stackexchange.com/a/101806/4759"""
        return ''.join(c for c in s.lower() if c in alpha)


def make_title(label):
        """Given a  string, returns the string in the format we use for
         identifying grids. This is used mostly to build internal link
         structures"""
        tag = remove_punctuation(label.lower().strip().replace(" ", ""))
        if tag == "":
                tag = "unknown"
        return tag


class Grid:

        """Class representing on n by n grid, complete with utterances, links
        colours, and so on. Currently outputs as javascript, should also
        write to json on it's own mertits"""

        def __init__(self, pres, slide, gridSize):
                self.grid_size = gridSize
                self.utterances = [
                    ["link" for x in range(self.grid_size)]
                    for x in range(self.grid_size)]
                self.links = [
                    ["blank" for x in range(self.grid_size)]
                    for x in range(self.grid_size)]
                self.colors = [
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
                # we don't miss items who are just outside the top left of the cell.
                col = math.floor((left * self.grid_size / self.slide_width) + 0.5);
                row = math.floor((top * self.grid_size / self.slide_height) + 0.5);
                return (int(col), int(row))

        def process_shape(self, shape):
                # print str(shape.top)+" "+str(shape.left)
                try:
                        if shape.is_placeholder:
                                if shape.placeholder_format.idx == 0:
                                        self.tag = shape.text

                        (co, ro) = self.get_col_row(shape.top, shape.left)

                        if hasattr(shape, "shape_type") and \
                            shape.shape_type == MSO_SHAPE_TYPE.AUTO_SHAPE:
                                if shape.auto_shape_type == MSO_SHAPE.FOLDED_CORNER:
                                    # Temporarily mark as "real link, needing to be filled by label"
                                    self.links[co][ro] = "real"
                                    if (hasattr(shape.fill.fore_color, "rgb")):
                                        self.colors[co][
                                            ro] = shape.fill.fore_color.rgb
                        if shape.has_text_frame:
                                self.process_text_frame(shape, co, ro)
                  #      print self.utterances[co][ro]
                  #      print self.links[co][ro]

                except (AttributeError, KeyError, NotImplementedError):
                        PrintException()
                        return

        def process_text_frame(self, shape, co, ro):
              #  text = self.utterances[co][ro]
                text = ""
                # if "Yes" in self.utterances[co][ro]:
                #         return
                for paragraph in shape.text_frame.paragraphs:
                        text += "".join([run.text.encode('ascii', 'ignore')
                                        for run in paragraph.runs])

                        # add the if shape_type is text box
                        if (remove_punctuation(text.strip()) == ""):
                            print "empty string"
                        else:
                            if self.links[co][ro] == "real":
                                self.links[co][ro] = make_title(text.strip())
                                self.utterances[co][ro] = "link"
                            else:
                                self.utterances[co][ro] = text.strip()

        def __str__(self):
                body = "\n".join(
                    [(self.string_from_cell(col, row))
                        for row in range(self.grid_size)
                        for col in range(self.grid_size)])
                return """
function %s(){
reset();
%s
document.main.src="%s.%03d.png";

}""" % (make_title(self.tag), body, fileRoot, slide_number)

        def string_from_cell(self, col, row):
                return '     links[{}][{}]="{}";'.format(
                    col, row, make_title(
                        self.links[col][row])) +\
                    '  utterances[{}][{}]="{}";'.format(
                        col, row, self.utterances[col][row]) + \
                        '  colors[{}][{}]="{}";'.format(
                            col, row, self.colors[col][row])


def export_images(grid, slide):
        """     Second pass through shapes list finds images and saves them.
        We have to do this separately so it's guaranteed we already know what to
        name the images!"""
        images = {}
        utterances = grid.utterances
        links = grid.links
        for shape in slide.shapes:
                # try:
                if not hasattr(shape, "shape_type"):
                    continue

                if shape.shape_type == MSO_SHAPE_TYPE.PICTURE or shape.shape_type == MSO_SHAPE_TYPE.LINKED_PICTURE:
                        (co, ro) = grid.get_col_row(shape.top, shape.left)
                        if (co, ro) not in images:
                                images[co, ro] = []
                        images[co, ro].append(shape);
                        # thing = Image.open( io.BytesIO(shape.image.blob))
                        # thing.save("icons/all/" + getShortUuid() + ".png")
                #
                # except:
                #         print "Exception exporting images!"
                #         continue

        # Compose each icon out of all the images in the grid cell.
        for (x, y) in images:
                print "got some images for " + str(y) + ", " + str(x)
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
                label = utterances[x][y]
                if  (label == "link"):
                    label = links[x][y]
                name = remove_punctuation(
                    "%d-%d-" %
                    (x, y)+label) + ".png"
                folder = "icons/" + str(slide_number)
                if not os.path.exists(folder):
                        os.makedirs(folder)
                composite.save(folder + "/" + name)


doPrintJSON = True;
doSaveJSON = False;
doExportImages = False;
doFirstSlideOnly = True;

prs = Presentation(inputFile)
slide_number = 1
for_json = {}
for slide in prs.slides:
        grid = Grid(prs, slide, gridSize)
        for_json[slide_number] = [
            make_title(
                grid.tag),
            grid.utterances,
            grid.links,
            slide_number]
        if (doExportImages):
            export_images(grid, slide)
        if (doPrintJSON):
            print grid
        slide_number += 1
        if doFirstSlideOnly:
            break
if (doSaveJSON):
        with open('data.json', 'w') as outfile:
            json.dump(for_json, outfile, sort_keys=True)

# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
