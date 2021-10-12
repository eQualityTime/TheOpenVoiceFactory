from unittest import TestCase
import unittest
#import mock
import urllib.request, urllib.parse, urllib.error
import json
import os
import sys
sys.path.append('..') #todo - test removal 
import pagesetparser.pagesetparser as pagesetparser
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




def regress(filename,size,bordercolor=False):
        compare_json_files(filename,filename+".json", size,bordercolor)

def compare_json_files(pres_loc, target_loc, gridSize,bordercolor=False):
        pagesetparser.gridSize=gridSize
        pagesetparser.bordercolor=bordercolor
        grids = pagesetparser.Pageset(pres_loc,"",gridSize,False).grids
        internal = pagesetparser.create_json_object(grids)
        internal = json.dumps(internal)
        pagesetparser.write_to_JSON(grids, "temp.json")
        local = 0
        with open('temp.json', 'r') as f:
                local = json.load(f)
        with open(target_loc, 'r') as f:
                real = json.load(f)
                assert real == local


if __name__=="__main__":
    unittest.main()