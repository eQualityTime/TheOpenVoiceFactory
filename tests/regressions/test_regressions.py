from unittest import TestCase
import unittest
#import mock
import urllib.request, urllib.parse, urllib.error
import json
import os
import sys
sys.path.append('..') #todo - test removal 
import TheOpenVoiceFactory.grab_text as grab_text
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

    def test_regession_ck12(self):
        regress("tests/regressions/regression_tests_size_4/CK12+V2.pptx",4)

    def test_regession_ck20_slo(self):
        regress("tests/regressions/regression_tests_size_5/CK20_slo_regession.pptx",5)

    def test_regession_ck20_arabic(self):
       # grab_text.bordercolor = True
        regress("tests/regressions/regression_tests_size_5/CK20V2_ara_regession.pptx",5, True)
       # grab_text.bordercolor = False

    def test_regession_ck20v2_bg(self):
        regress("tests/regressions/regression_tests_size_5/CK20V2.pptx",5)



def regress(filename,size,bordercolor=False):
        compare_json_files(filename,filename+".json", size,bordercolor)

def compare_json_files(pres_loc, target_loc, gridSize,bordercolor=False):
        grab_text.gridSize=gridSize
        grab_text.bordercolor=bordercolor
        grids = grab_text.Pageset(pres_loc,"",gridSize,False).grids
        internal = grab_text.create_json_object(grids)
        internal = json.dumps(internal)
        grab_text.write_to_JSON(grids, "temp.json")
        local = 0
        with open('temp.json', 'r') as f:
                local = json.load(f)
        with open(target_loc, 'r') as f:
                real = json.load(f)
                assert real == local


if __name__=="__main__":
    unittest.main()
