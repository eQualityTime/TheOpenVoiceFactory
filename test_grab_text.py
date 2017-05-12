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

    CK20=None

    def get_singleton_CK20(self):
        if not self.CK20:
            prs = Presentation("testinputs/CK20V2.pptx")
            grab_text.gridSize=5
            self.CK20 = grab_text.extract_grid(prs)
        return self.CK20

    def test_first(self):
         self.assertEqual(3,3)



    def test_read_CK20_and_count_slides(self):
        grids = self.get_singleton_CK20()
        self.assertEqual(len(grids),100)


    def test_read_CK20_and_check_titles(self):
        grids = self.get_singleton_CK20()
        self.assertEqual(grids[0].tag,"Top page")



if __name__=="__main__":
    unittest.main()
