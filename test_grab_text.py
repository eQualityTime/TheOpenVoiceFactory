from unittest import TestCase
import unittest
import grab_text
import urllib
import json
import os
import sys
sys.path.append('/home/joereddington/')
from pptx import Presentation
from pptx.enum.shapes import MSO_SHAPE_TYPE
from pprint import pprint
import json
import io
import os
import math
import string
import unicodedata
from PIL import Image
from sys import argv
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE




class ovfTest(TestCase):

    def test_first(self):
         self.assertEqual(3,3)



    def test_read_CK20_and_count_slides(self):
        prs = Presentation("testinputs/CK20V2.pptx")
        grab_text.gridSize=5
        grids = grab_text.extract_grid(prs)
        self.assertEqual(len(grids),100)


    def test_read_CK20_and_check_titles(self):
        prs = Presentation("testinputs/CK20V2.pptx")
        grab_text.gridSize=5
        grids = grab_text.extract_grid(prs)
        self.assertEqual(grids[0]['title'],"main")



if __name__=="__main__":
    unittest.main()
