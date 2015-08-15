#!/usr/bin/python
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE

import io
import os
from PIL import Image
from array import array

import uuid

COL_TABLE = {152400: 0, 1503659: 1, 1600200: 1, 2861846: 2, 2819400: 2, 2854919: 2,
             2854925: 2, 4170660: 3, 4191000: 3, 5542260: 4, 5769114: 4, 5562600: 4, 5769125: 4}
ROW_TABLE = {0: 0, 152400: 0, 152401: 0, 1981200: 1, 3771900: 2, 5562600: 3,
             5610125: 3, 6095999: 3, 7314625: 4, 7340121: 4, 7340600: 4}
# something odd about the zero, look into that.


# Note: This may not be robust to internationalisation.
alpha="abcdefghijklmnopqrstuvwxyz1234567890_"

#  dictionary of icons,
# key = (row, col)
# value = list of one or more PICTURE shapes.
images = {};

def resizeImage(image, scaleFactor):
    oldSize = image.size
    newSize = (scaleFactor*oldSize[0],
                scaleFactor*oldSize[1])
    return image.resize(newSize, Image.ANTIALIAS)

# Helper for testing - generate unique chars.
def getShortUuid():
    u = str(uuid.uuid1())
    u = u.split("-")[0]
    return u;

def remove_punctuation(s):
    s_sans_punct = ""
    for letter in s:
        if letter.lower() in alpha:
            s_sans_punct += letter
    return s_sans_punct
#from http://openbookproject.net/thinkcs/python/english3e/strings.html

def slide_title_placeholder(slide):
	"""from https://github.com/scanny/python-pptx/issues/153#issuecomment-84475019"""
	for shape in slide.shapes:
		if not shape.is_placeholder:
			continue
		if shape.placeholder_format.idx == 0:
			return shape
		return None

def make_title(label):
    return remove_punctuation(label.lower().strip().replace(" ","_"))

# Returns the closest key in the dictionary, for numerical keys.
def get_closest_key(dict, inKey):
    # from http://stackoverflow.com/a/7934624/170243
    if inKey in dict:
        return inKey
    else:
        return min(dict.keys(), key=lambda k: abs(k - inKey))

def get_column(leftPos):
    key = get_closest_key(COL_TABLE, leftPos);
    return COL_TABLE[key]

def get_row(topPos):
    key = get_closest_key(ROW_TABLE, topPos);
    return ROW_TABLE[key]

def get_index(leftPos, topPos):
    co = get_column(leftPos);
    ro = get_row(topPos);
    return ro*5 + co

class utterance(object):

    "recording the utterance and where it is on the screen, for now we are doing the grid, later we will allow this to use different heigh/width and placement options"

    column = 0
    row = 0

    text = ""

    def __init__(self, row, column, text):
        self.column, self.row, self.text = row, column, text

    def __str__(self):
        return "utterance[%d][%d]=\"%s\";" % (self.column, self.row, self.text)

prs = Presentation("../azuleKirsty/testSuite/launch/CommuniKate20launch.pptx")

# text_runs will be populated with a list of strings,
# one for each text run in presentation
slide_number=1
for slide in prs.slides:
    print "slide number is %s" % slide_number
    title=slide_title_placeholder(slide)
    print """function %s(){
reset();     """ % make_title(title.text)
    utterances = [["link" for x in range(5)] for x in range(5)]
    links = [["blank" for x in range(5)] for x in range(5)]
    colors = [["" for x in range(5)] for x in range(5)]
    #  dictionary of icons,
    # key = (row, col)
    # value = list of one or more PICTURE shapes.
    images = {};

    # First pass through the shapes populates our utterances array.
    for shape in slide.shapes:
        co = get_column(shape.top)
        ro = get_row(shape.left)

        if shape.shape_type == MSO_SHAPE_TYPE.AUTO_SHAPE:
      #      print shape.auto_shape_type
            # NOTE: There seems to be a bug in python-pptx v0.5.7.
            # where "foldedCorner" is misspelled "folderCorner" in enum/shapes.py
            if shape.auto_shape_type == MSO_SHAPE.FOLDED_CORNER:
                links[co][ro] = "real"
                try:
                    colors[co][ro] = shape.fill.fore_color.rgb
                except AttributeError:
                    pass

        if not shape.has_text_frame:
            continue

        text = ""
        for paragraph in shape.text_frame.paragraphs:
            for run in paragraph.runs:
                text += run.text.encode('ascii', 'ignore')
        if text != "":
            # add the if shape_type is text box

            utterances[co][ro] = text

    # Second pass through shapes list finds images and saves them.
    # We have to do this separately so it's guaranteed we already know what to
    # name the images!
    for shape in slide.shapes:
        if shape.shape_type == MSO_SHAPE_TYPE.PICTURE :
            co = get_column(shape.top)
            ro = get_row(shape.left)

            if (co, ro) not in images:
                images[co, ro] = []
            images[co, ro].append(shape)


    # Compose each icon out of all the images in the grid cell.
    for x in range(5):
        for y in range(5):
            if (x,y) in images:
                # Go through all the images, compute bounding box.
                l = min([shape.left for shape in images[x,y]])
                t = min([shape.top for shape in images[x,y]])
                r = max([shape.left + shape.width for shape in images[x,y]])
                b = max([shape.top + shape.height for shape in images[x,y]])

                # Scale gives us the mapping from image pixels to powerpoint
                # distance units. This depends on the resolution of the images.
                scale = min([shape.width/shape.image.size[0]
                                for shape in images[x,y]])

                # Size of combined image, in actual pixels (not PPTX units)
                # If scales differ between objects, we resize them next
                w = (r-l)/scale
                h = (b-t)/scale
                composite = Image.new('RGBA', (w,h))

                # Add all the images together.
                for shape in images[x,y]:
                    # TODO: flipping.
                    part = Image.open(io.BytesIO(shape.image.blob))
                    width=part.size[0]
                    height=part.size[1]
                    left=shape.crop_left*width
                    right=(1-shape.crop_right)*width
                    top=shape.crop_top*height
                    bottom=(1-shape.crop_bottom)*height
                    box=(int(left),int(top),int(right),int(bottom))
                    part=part.crop(box)
                    partScale = (shape.width/part.size[0])#part.size because it might have been cropped

                    part = resizeImage(part, partScale/scale)

                    composite.paste(part,
                                    ((shape.left - l)/scale,
                                        (shape.top - t)/scale),
                                    part) # This masks out transparent pixels

                # Crop final image.
                bbox = composite.getbbox()
                composite = composite.crop(bbox)

                # Save!
                name = remove_punctuation("%d-%d-"%(x,y)+utterances[x][y]) + ".png";
                folder = "icons/"+ str(slide_number)
                if not os.path.exists(folder):
                    os.makedirs(folder)
                print folder + "/" + name
                composite.save(folder + "/" + name );

            if links[x][y] == "real":
                print "     links[%d][%d]=\"%s\";" % (y, x, make_title(utterances[x][y]))
            else:
                if links[x][y] == "blank":
                    print "utterances[%d][%d]=\"%s\";" % (y, x, utterances[x][y])
                else:
                    raise ValueError("You never listen.")
    print """ document.main.src="images/originalSlides/Slide%02d.png";

}""" % (slide_number)

    #break
    slide_number+=1
# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4


