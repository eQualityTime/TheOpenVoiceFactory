#!/usr/bin/python
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE_TYPE

COL_TABLE = {152400: 0, 1503659: 1, 1600200: 1, 2861846: 2, 2819400: 2, 2854919: 2,
             2854925: 2, 4170660: 3, 4191000: 3, 5542260: 4, 5769114: 4, 5562600: 4, 5769125: 4}
ROW_TABLE = {0: 0, 152400: 0, 152401: 0, 1981200: 1, 3771900: 2, 5562600: 3,
             5610125: 3, 6095999: 3, 7314625: 4, 7340121: 4, 7340600: 4}
# something odd about the zero, look into that.


alpha="abcdefghijklmnopqrstuvwxyz1234567890_"

def remove_punctuation(s):
    s_sans_punct = ""
    for letter in s:
        if letter in alpha:
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

def get_row(in_num):
            # from http://stackoverflow.com/a/7934624/170243
    return ROW_TABLE[in_num] if in_num in ROW_TABLE else ROW_TABLE[min(ROW_TABLE.keys(), key=lambda k: abs(k - in_num))]

def make_title(label):
    return remove_punctuation(label.lower().strip().replace(" ","_"))


def get_column(in_num):
            # from http://stackoverflow.com/a/7934624/170243
    return COL_TABLE[in_num] if in_num in COL_TABLE else COL_TABLE[min(COL_TABLE.keys(), key=lambda k: abs(k - in_num))]


class utterance(object):

    "recording the utterance and where it is on the screen, for now we are doing the grid, later we will allow this to use different heigh/width and placement options"

    column = 0
    row = 0

    text = ""

    def __init__(self, row, column, text):
        self.column, self.row, self.text = row, column, text

    def __str__(self):
        return "utterance[%d][%d]=\"%s\";" % (self.column, self.row, self.text)

prs = Presentation("testSuite/launch/CommuniKate20launch.pptx")

# text_runs will be populated with a list of strings,
# one for each text run in presentation
slide_number=1
for slide in prs.slides:
    title=slide_title_placeholder(slide)
    print """function %s(){
reset();     """ % make_title(title.text)
    utterances = [["link" for x in range(5)] for x in range(5)]
    links = [["blank" for x in range(5)] for x in range(5)]
    for shape in slide.shapes:
        if shape.shape_type == MSO_SHAPE_TYPE.AUTO_SHAPE:
      #      print shape.auto_shape_type
            if shape.auto_shape_type == 16:  # foldedcorner
                links[get_column(shape.top)][get_row(shape.left)] = "real"
        if not shape.has_text_frame:

            continue
        text = ""
        for paragraph in shape.text_frame.paragraphs:
            for run in paragraph.runs:
                text += run.text.encode('ascii', 'ignore')
        if text != "":
            # add the if shape_type is text box
            co = get_column(shape.top)
            ro = get_row(shape.left)
            utterances[co][ro] = text
    for x in range(5):
        for y in range(5):
            if links[x][y] == "real":
                print "     links[%d][%d]=\"%s\";" % (y, x, make_title(utterances[x][y]))
            else:
                if links[x][y] == "blank":
                    print "utterances[%d][%d]=\"%s\";" % (y, x, utterances[x][y])
                else:
                    raise ValueError("You never listen.")
    print """ document.main.src="images/originalSlides/Slide%02d.png";

}""" % (slide_number)

    break
    slide_number+=1
# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4

