from unittest import TestCase
import filecmp
import unittest
from tests.regressions.generate_regressions import generate_obz
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


    def test_obz_pages(self):
        compare_boards("tests/regressions/regression_tests_size_5/CK20V2_bg_regression.pptx",5)
        compare_boards("tests/regressions/regression_tests_size_5/CK20V2_ara_regession.pptx",5)
        compare_boards("tests/regressions/regression_tests_size_5/CK20_slo_regession.pptx",5)
        compare_boards("tests/regressions/regression_tests_size_5/CK20V2_gr_regression.pptx",5)
        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_5/CK20V2_es_regression.pptx",5))
        compare_boards("tests/regressions/regression_tests_size_5/CK20V2-place.pptx",5)
        compare_boards("tests/regressions/regression_tests_size_5/CK20V2_sk_regression.pptx",5)
        compare_boards("tests/regressions/regression_tests_size_5/CK20V2.pptx",5)
        compare_boards("tests/regressions/regression_tests_size_4/CK12+V2.pptx",4)
    

def compare_boards(directory_name, page_size):
        generate_obz(directory_name,page_size)
        print(directory_name) 
        for file in glob.glob(directory_name+".obz.attempt/boards/*.obf"):
            print(file)  
            print("XXXXXXXXXX") 
            target=file.replace('attempt','target')
            if not filecmp.cmp(file,target):
                return False
        return True



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
