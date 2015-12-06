#!/usr/bin/python
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
# Make the images export more effectively

from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE
from pptx.enum.action import PP_ACTION
import json
import io
import os
import string
from PIL import Image

import sys
import linecache
print_exceptions = False


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


class Locator:

        """Static class designed to abstract away the process of working out
        which bit of the grid a particular part of powerpoint is in"""
        ROW_TABLE = {

            152404:  0,
            1845122: 1,
            1874564: 1,
            3504321: 2,
            3505369: 2,
            3541832: 2,
            5225484: 3,
            5226008: 3,
            5576358: 3
            }

        COL_TABLE = {
            0: 0,
            152400: 0,
            152402: 0,
            175371: 0,
            2415785: 1,
            2415786: 1,
            2415786: 1,
            4697109: 2,
            4700413: 2,
            4700414: 2,
            6963797: 3,
            6963798: 3
            }


#
#        ROW_TABLE = {152400: 0, 1503659: 1, 1600200: 1, 2861846: 2,
#                     2819400: 2, 2854919: 2, 2854925: 2, 4170660: 3,
#                     4191000: 3, 5542260: 4, 5769114: 4, 5562600: 4, 5769125: 4}
#        COL_TABLE = {
#            0: 0,
#            152400: 0,
#            152401: 0,
#            1981200: 1,
#            3771900: 2,
#            5562600: 3,
#            5610125: 3,
#            6095999: 3,
#            7314625: 4,
#            7340121: 4,
#            7340600: 4}

        @staticmethod
        def get_closest_key(dict, inKey):
                "Returns the closest key in the dictionary, for numerical keys."
                # from http://stackoverflow.com/a/7934624/170243
                if inKey in dict:
                        return inKey
                else:
                        return min(dict.keys(), key=lambda k: abs(k - inKey))

        @staticmethod
        def get_cr(topPos, leftPos):
                col = Locator.get_closest_key(Locator.COL_TABLE, leftPos)
                row = Locator.get_closest_key(Locator.ROW_TABLE, topPos)
                return (Locator.COL_TABLE[col], Locator.ROW_TABLE[row])


class Grid:

        """Class representing on n by n grid, complete with utterances, links
        colours, and so on. Currently outputs as javascript, should also
        write to json on it's own mertits"""

        grid_width = 4

        def update_links(self, grids):
                for col in range(self.grid_width):
                        for row in range(self.grid_width):
                                current=self.links[row][col]
                                print current
                                if "slide" in current:
                                        # first extract the number
                                        number_string = ''.join(
                                            c for c in current if c in string.digits)
                                        print number_string
                                        print "which is", grids[int(number_string)].tag
                                        # Then work out the relevent tag
                                        self.links[row][col]=make_title(grids[int(number_string)].tag)

                        print "Update links called on"
                        print self.tag

        def __init__(self, slide):
                self.labels = [
                    ["" for x in range(self.grid_width)]
                    for x in range(self.grid_width)]
                self.utterances = [
                    ["" for x in range(self.grid_width)]
                    for x in range(self.grid_width)]
                self.links = [
                    ["" for x in range(self.grid_width)]
                    for x in range(self.grid_width)]
                self.colors = [
                    ["" for x in range(self.grid_width)]
                    for x in range(self.grid_width)]
                self.icons = [
                    ["" for x in range(self.grid_width)]
                    for x in range(self.grid_width)]
                self.tag = ""
                for shape in slide.shapes:
                        self.process_shape(shape)

        def process_shape(self, shape):
                # print str(shape.top)+" "+str(shape.left)
                try:
                        if shape.is_placeholder:
                                if shape.placeholder_format.idx == 0:
                                        self.tag = shape.text
                                        # shoudl there be a return here?
                        (co, ro) = Locator.get_cr(shape.top, shape.left)
                        # Now - let's find out if there is a link...
                        click_action = shape.click_action
                        if click_action.hyperlink.address is not None:
                                self.links[co][
                                        ro] = click_action.hyperlink.address
                        if click_action.action == PP_ACTION.OPEN_FILE:
                                print "open"
                                print click_action.hyperlink.address
                        if click_action.action == PP_ACTION.HYPERLINK:
                                print "hyper"
                                print click_action.hyperlink.address
                        target_slide = click_action.target_slide
                        if target_slide is not None:
                                print "local"
                                print click_action.hyperlink.address

                        #print (co,ro)
                        if shape.shape_type == MSO_SHAPE_TYPE.AUTO_SHAPE:
                                try:
                                        self.colors[co][
                                                ro] = shape.fill.fore_color.rgb
                                except (TypeError):
                                        pass
                        if shape.has_text_frame:
                                self.process_text_frame(shape, co, ro)
                        self.icons[co][
                                ro] = "icons/" + create_icon_name(co, ro, self.utterances, self.links)
                  #      print self.utterances[co][ro]
                  #      print self.links[co][ro]

                except (AttributeError, KeyError, NotImplementedError):
                        PrintException()
                        return

        def process_text_frame(self, shape, co, ro):
              #  text = self.utterances[co][ro]
                text = ""
                if "Yes" in self.utterances[co][ro]:
                        return
                for paragraph in shape.text_frame.paragraphs:
                        text += "".join([run.text.encode('ascii', 'ignore')
                                         for run in paragraph.runs])
                if text != "":
                        # add the if shape_type is text box
                        self.utterances[co][ro] = text.strip()

        def __str__(self):
                body = "\n".join(
                    [(self.string_from_cell(row, col))
                        for col in range(self.grid_width)
                        for row in range(self.grid_width)])
                return """
function %s(){
reset();
%s
document.main.src="ck12/ck12+.%03d.png";

}""" % (make_title(self.tag), body, slide_number)

        def string_from_cell(self, row, col):
                #                return '     links[{}][{}]="{}";'.format(
                #                    row, col, make_title(
                #                        self.links[row][col])) +\
                #                    '  utterances[{}][{}]="{}";'.format(
                #                        row, col, self.utterances[row][col])
                if self.links[row][col] == "blank":
                        return 'utterances[{}][{}]="{}";'.format(
                            row,
                            col,
                            self.utterances[row][col])
                return '     links[{}][{}]="{}";'.format(
                    row, col, make_title(self.links[row][col]))


def export_images(grid, slide):
        """     Second pass through shapes list finds images and saves them.
        We have to do this separately so it's guaranteed we already know what to
        name the images!"""
        images = {}
        utterances = grid.utterances
        for shape in slide.shapes:
                try:
                        if shape.shape_type == MSO_SHAPE_TYPE.PICTURE:
                                (co, ro) = Locator.get_cr(shape.top, shape.left)
                                if (co, ro) not in images:
                                        images[co, ro] = []
                                images[co, ro].append(shape)
                except:
                        continue

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
                        composite.paste(
                            part,
                            ((shape.left - l)/scale,
                             (shape.top - t)/scale),
                            part)  # This masks out transparent pixels

                # Crop final image.
                bbox = composite.getbbox()
                composite = composite.crop(bbox)

                # Save!
                name = create_icon_name(x, y, utterances, grid.links)
                print name
                folder = "icons/"  # + str(slide_number)
                if not os.path.exists(folder):
                        os.makedirs(folder)
                composite.save(folder + "" + name)


def create_icon_name(x, y, utterances, links):

        name = remove_punctuation(utterances[x][y]) + ".png"
        if name == ".png":
                name = remove_punctuation(links[x][y])+".png"
                if name == ".png":
                        name = "unknown"+str(slide_number)+str(x)+str(y)+".png"
        return name

prs = Presentation("../azulejoe/testSuite/ck12/CK12+.pptx")
slide_number = 1
for_json = {}
grids = {}
for slide in prs.slides:
        grids[slide_number] = Grid(slide)
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
with open('ck12.json', 'w') as outfile:
        json.dump(for_json, outfile, sort_keys=True)
# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4


#for i in range(1, 20):
#        print i
#        print grids[i].tag
