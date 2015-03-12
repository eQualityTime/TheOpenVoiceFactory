#!/usr/bin/python
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
from pptx import Presentation
import operator

column={152400:0, 1503659:1, 1600200:1, 2819400:2, 2854919:2, 2854925:2, 4170660:3, 5542260:4, 5562600:4, 5769125:4}
row={0:0, 152400:0, 152401:0, 1981200:1, 3771900:2, 5562600:3, 5610125:3, 6095999:3, 7314625:4, 7340121:4, 7340600:4}
#something odd about the zero, look into that. 


class utterance(object):
   "recording the utterance and where it is on the screen, for now we are doing the grid, later we will allow this to use different heigh/width and placement options"
   
   column=0
   row=0
   text=""
   
   def __init__(self, row, column, text):
       self.column,self.row,self.text=row,column,text

   def __str__(self):
       return "utterance[%d][%d]=\"%s\";" % (self.column,self.row,self.text)    

prs = Presentation("testSuite/test1/CommuniKate20-es.pptx")

# text_runs will be populated with a list of strings,
# one for each text run in presentation
utterance_list = []

for slide in prs.slides:
    print "new slide"
    for shape in slide.shapes:
        if not shape.has_text_frame:
            continue
	text=""
        for paragraph in shape.text_frame.paragraphs:
            for run in paragraph.runs:
		text+=run.text.encode('ascii', 'ignore')
        if(text!=""):
 	    utterance_list.append( utterance(column[shape.top], row[shape.left], text))
#this needs to concratinate multiple paragraphs...
    break



utterance_list.sort(key=operator.attrgetter('row'))
utterance_list.sort(key=operator.attrgetter('column'))
for x in utterance_list:
   print x
