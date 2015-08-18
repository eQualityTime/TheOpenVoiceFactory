#!/usr/bin/python
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
#Todo - make the class a relevent thing
#Make the images export more effectively

from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE

import io
import os
from PIL import Image

import uuid


COL_TABLE = {

                152404:  0,
                1845122: 1,
                1874564: 1,
                3504321: 2,
                3505369: 2,
                3541832: 2,
                5225484: 3,
                5226008: 3,
                5576358:3
             }
ROW_TABLE = {0: 0,
                152400:0,
                152402:0,
                175371:0,
                2415785:1,
                2415786:1,
                2415786:1,
                4697109:2,
                4700413:2,
                4700414:2,
                6963797:3,
                6963797:3,
                6963798:3
}

# Note: This may not be robust to internationalisation.
alpha = "abcdefghijklmnopqrstuvwxyz1234567890_"

#  dictionary of icons,
# key = (row, col)
# value = list of one or more PICTURE shapes.
images = {}


def resizeImage(image, scaleFactor):
        oldSize = image.size
        newSize = (scaleFactor*oldSize[0],
                   scaleFactor*oldSize[1])
        return image.resize(newSize, Image.ANTIALIAS)

# Helper for testing - generate unique chars.


def getShortUuid():
        u = str(uuid.uuid1())
        u = u.split("-")[0]
        return u


def remove_punctuation(s):
        s_sans_punct = ""
        for letter in s:
                if letter.lower() in alpha:
                        s_sans_punct += letter
        return s_sans_punct
# from http://openbookproject.net/thinkcs/python/english3e/strings.html


def slide_title_placeholder(slide):
        """from https://github.com/scanny/python-pptx/issues
        /153#issuecomment-84475019"""
        for shape in slide.shapes:
                if not shape.is_placeholder:
                        continue
                if shape.placeholder_format.idx == 0:
                        return shape
                return None


def make_title(label):
        tag =remove_punctuation(label.lower().strip().replace(" ", "_"))
        if tag=="":
            tag="unknown"
        return tag

# Returns the closest key in the dictionary, for numerical keys.


def get_closest_key(dict, inKey):
        # from http://stackoverflow.com/a/7934624/170243
        if inKey in dict:
                return inKey
        else:
                return min(dict.keys(), key=lambda k: abs(k - inKey))


def get_column(leftPos):
        key = get_closest_key(COL_TABLE, leftPos)
        return COL_TABLE[key]


def get_row(topPos):
        key = get_closest_key(ROW_TABLE, topPos)
        return ROW_TABLE[key]


def get_index(leftPos, topPos):
        co = get_column(leftPos)
        ro = get_row(topPos)
        return ro*4 + co


class utterance(object):

        """recording the utterance and where it is on the screen, for now we are
         doing the grid, later we will allow this to use different heigh/width
         and placement options"""

        column = 0
        row = 0

        text = ""

        def __init__(self, row, column, text):
                self.column, self.row, self.text = row, column, text

        def __str__(self):
                return "utterance[%d][%d]=\"%s\";" % (
                    self.column, self.row, self.text)


def read_utterances_and_links(slide):
        utterances = [["link" for x in range(4)] for x in range(4)]
        links = [["blank" for x in range(4)] for x in range(4)]
        colors = [["" for x in range(4)] for x in range(4)]
        #  dictionary of icons,
        # key = (row, col)
        # value = list of one or more PICTURE shapes.
        images = {}

        # First pass through the shapes populates our utterances array.
        for shape in slide.shapes:
                co = get_column(shape.top)
                ro = get_row(shape.left)
                try:
                    if shape.shape_type == MSO_SHAPE_TYPE.AUTO_SHAPE:
                            if shape.auto_shape_type == MSO_SHAPE.FOLDED_CORNER:
                                    links[co][ro] = "real"
                                    try:
                                            colors[co][
                                                ro] = shape.fill.fore_color.rgb
                                    except AttributeError:
                                            pass
                except:
                    continue
                if not shape.has_text_frame:
                        continue
                text = utterances[co][ro]
                if "link" in utterances[co][ro]:
                    text=""

                if  "Yes" in utterances[co][ro]:
                    continue
                for paragraph in shape.text_frame.paragraphs:
                        for run in paragraph.runs:
                                text += run.text.encode('ascii', 'ignore')
                if text != "":
                        # add the if shape_type is text box
                        utterances[co][ro] = text
#                print "%s, %d, %d, [%d][%d]" % (text.rjust(15," "), shape.top,shape.left,co,ro)
        return (utterances, links, colors)


def export_images(slide, utterances):
        """     Second pass through shapes list finds images and saves them.
        We have to do this separately so it's guaranteed we already know what to
        name the images!"""
        for shape in slide.shapes:
            try:

                    if shape.shape_type == MSO_SHAPE_TYPE.PICTURE:
                            co = get_column(shape.top)
                            ro = get_row(shape.left)

                            if (co, ro) not in images:
                                    images[co, ro] = []
                            images[co, ro].append(shape)
            except:
                continue

        # Compose each icon out of all the images in the grid cell.
        for x in range(4):
                for y in range(4):
                        if (x, y) in images:
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
                                        partScale = (
                                            shape.width /
                                            part.size[0])  # part.size because it might have been cropped

                                        part = resizeImage(
                                            part,
                                            partScale /
                                            scale)

                                        composite.paste(
                                            part,
                                            ((shape.left - l)/scale,
                                             (shape.top - t)/scale),
                                            part)  # This masks out transparent pixels

                                # Crop final image.
                                bbox = composite.getbbox()
                                composite = composite.crop(bbox)

                                # Save!
                                name = remove_punctuation( "%d-%d-" %
                                    (x, y)+utterances[x][y]) + ".png"
                                folder = "icons/" + str(slide_number)
                                if not os.path.exists(folder):
                                        os.makedirs(folder)
                                composite.save(folder + "/" + name)
def get_slide_title(slide):
        tag = "unknown"
        try:
            tag = slide_title_placeholder(slide).text
        except:
            pass
        return tag

def process_slide(slide, slide_number):
#        print "slide number is %s" % slide_number
        tag=get_slide_title(slide)
        print """function %s(){
reset();     """ % make_title(tag)
        (utterances, links, colors) = read_utterances_and_links(slide)

        #export_images(slide, utterances)
        for x in range(4):
                for y in range(4):

                        if links[x][y] == "real":
                                print "     links[%d][%d]=\"%s\";" % (y, x, make_title(utterances[x][y]))
                        else:
                                if links[x][y] == "blank":
                                        print "utterances[%d][%d]=\"%s\";" % (y, x, utterances[x][y])
                                else:
                                        raise ValueError("You never listen.")
        print """ document.main.src="images/CK15+.%03d.png";

}""" % (slide_number)


prs = Presentation("../azulejoe/testSuite/CK15/CK15+.pptx")

# text_runs will be populated with a list of strings,
# one for each text run in presentation
slide_number = 1
for slide in prs.slides:
        process_slide(slide, slide_number)
        slide_number += 1
#            break
# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
