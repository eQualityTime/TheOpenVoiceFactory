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
import glob
import unicodedata
from PIL import Image
from sys import argv
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.shapes import MSO_SHAPE_TYPE




class ovfTest(TestCase):


    def test_all_regressions(self): 
         for file in glob.glob("tests/regressions/regression_tests_size_5/*.pptx"):
            with self.subTest(file):
                print(file)
                regress(file,5) 
         for file in glob.glob("tests/regressions/regression_tests_size_4/*.pptx"):
            with self.subTest(file):
                print(file)
                regress(file,4) 

    def test_one(self):
        regress("tests/regressions/regression_tests_size_5/CK20V2.pptx",5)




def regress(pres_loc,gridSize,bordercolor=False):
        target_loc=pres_loc+".json"
        attempt_loc=pres_loc+".attempt.json"
        grab_text.gridSize=gridSize
        grab_text.bordercolor=bordercolor
        grids = grab_text.Pageset(pres_loc,"",gridSize,False).grids
        internal = grab_text.create_json_object(grids)
        internal = json.dumps(internal)
        grab_text.write_to_JSON(grids, attempt_loc)
        local = 0
        with open(attempt_loc, 'r') as f:
                local = json.load(f)
        with open(target_loc, 'r') as f:
                real = json.load(f)
                assert real == local


if __name__=="__main__":
    unittest.main()
