#!/usr/bin/python
"Extracting Utterances from CommuniKate pagesets designed in PowerPoint"
from pptx import Presentation
import operator

column={152400:0, 1503659:1, 1600200:1, 2861846:2, 2819400:2, 2854919:2, 2854925:2, 4170660:3, 4191000:3, 5542260:4,5769114:4, 5562600:4, 5769125:4}
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

for slide in prs.slides:
    utterance_list = []
    print "new slide"
    for shape in slide.shapes:
        if shape.shape_type==1:
            shape.auto_shape_type
           
        if not shape.has_text_frame:
           
            continue
        text=""
        for paragraph in shape.text_frame.paragraphs:
            for run in paragraph.runs:
		text+=run.text.encode('ascii', 'ignore')
        if(text!=""):
            #add the if shape_type is text box
            co=column[shape.top] if shape.top in column else column[min(column.keys(), key=lambda k: abs(k-shape.top))] #from http://stackoverflow.com/a/7934624/170243 
            ro=row[shape.left] if shape.left in row else row[min(row.keys(), key=lambda k: abs(k-shape.left))] #from http://stackoverflow.com/a/7934624/170243 
 	    utterance_list.append( utterance(co, ro, text))
    utterance_list.sort(key=operator.attrgetter('row'))
    utterance_list.sort(key=operator.attrgetter('column'))
    for x in utterance_list:
        print x
    break


# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
