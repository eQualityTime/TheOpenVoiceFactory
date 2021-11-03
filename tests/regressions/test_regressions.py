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
from pagesetparser.pageset import Pageset
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


    #TODO: we could speed this up by only looking at each file once - currently we completely process each pptx twice. 

    def test_obz_pages(self):

#         generate_obz("tests/regressions/regression_tests_size_4/CK12+V2.pptx",4)
#         generate_obz("tests/regressions/regression_tests_size_5/CK20V2.pptx",5)
#         generate_obz("tests/regressions/regression_tests_size_5/CK20V2_ara_regession.pptx",5)
#         generate_obz("tests/regressions/regression_tests_size_5/CK20V2_bg_regression.pptx",5)
#         generate_obz("tests/regressions/regression_tests_size_5/CK20V2_gr_regression.pptx",5)
#         generate_obz("tests/regressions/regression_tests_size_5/CK20V2_sk_regression.pptx",5)
#         generate_obz("tests/regressions/regression_tests_size_5/CK20_slo_regession.pptx",5)
#         generate_obz("tests/regressions/regression_tests_size_5/CK20V2-place.pptx",5)
#         generate_obz("tests/regressions/regression_tests_size_5/CK20V2_es_regression.pptx",5)


        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_4/CK12+V2.pptx",4))
        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_5/CK20V2.pptx",5))
        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_5/CK20V2_ara_regession.pptx",5))
        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_5/CK20V2_bg_regression.pptx",5))
        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_5/CK20V2_gr_regression.pptx",5))
        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_5/CK20V2_sk_regression.pptx",5))
        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_5/CK20_slo_regession.pptx",5))
        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_5/CK20V2-place.pptx",5))
        self.assertTrue(compare_boards("tests/regressions/regression_tests_size_5/CK20V2_es_regression.pptx",5))
    
    def test_all_regressions(self): 
         for file in glob.glob("tests/regressions/regression_tests_size_5/*.pptx"):
            print("CXXXXXCCCCC")
            print(file)
            with self.subTest(file):
                print(file)
                regress(file,5) 
         for file in glob.glob("tests/regressions/regression_tests_size_4/*.pptx"):
            print("AAAAAAAAAACXXXXXCCCCC")
            print(file)
            with self.subTest(file):
                print(file)
                regress(file,4) 

def compare_boards(directory_name, page_size):
        generate_obz(directory_name,page_size)
        print("We are in directory {}".format(directory_name))
        if not compare(directory_name+".obz.attempt/manifest.json"):
            return False
        print("Now we start the comparisons") 
        for file in glob.glob(directory_name+".obz.attempt/boards/*.obf"):
            if not compare(file):
                return False
        return True

def compare(file):
    print(file)  
    print("XXXXXXXXXX") 
    target=file.replace('attempt','target')
    return filecmp.cmp(file,target)

def regress(filename,size,bordercolor=False):
        compare_json_files(filename,filename+".json", size,bordercolor)

def compare_json_files(pres_loc, target_loc, grid_size,bordercolor=False):
        Pageset(pres_loc,"",grid_size,False).write_json('temp.json')
        local = 0
        with open('temp.json', 'r') as f:
                local = json.load(f)
        with open(target_loc, 'r') as f:
                real = json.load(f)
                assert real == local


if __name__=="__main__":
    unittest.main()
