from unittest import TestCase
import unittest
import mock
import urllib
import json
import os
import sys
sys.path.append('/home/joereddington/')
sys.path.append('..')
import grab_text
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

    CK20=None #This is the pageset

    def get_singleton_CK20(self):
        if not self.CK20:
           # prs = Presentation("CK20V2cutdown.pptx")
            grab_text.gridSize=5
            self.CK20 = grab_text.Pageset("CK20V2cutdown.pptx","",False)
        return self.CK20

    def test_first(self):
         self.assertEqual(3,3)



    def test_read_CK20_and_count_slides(self):
        grids = self.get_singleton_CK20().grids
        self.assertEqual(len(grids),10)


    def test_read_CK20_and_check_titles(self):
        grids = self.get_singleton_CK20().grids
        self.assertEqual(grids[0].tag,"Top page")


    def test_read_CK20_and_check_color(self):
        grids = self.get_singleton_CK20().grids
        self.assertEqual(grids[0].colors[2][2],(255,125,236))

    def test_read_CK20_and_check_link(self):
        grids = self.get_singleton_CK20().grids
        print "XXXXXX"
        print grids[0].labels[4][1]
        print grids[0].links[4][1]
        print "XXXXXX"
        self.assertNotEqual(grids[0].links[4][1],"")




    def test_read_CK20_and_check_link_neg(self):
        grids = self.get_singleton_CK20().grids
        self.assertEqual(grids[0].links[1][1],"")

    def test_make_title(self):
        tag = grab_text.make_title("A sentance")
        self.assertEqual(tag,"asentance")

    def test_make_title_2(self):
        tag = grab_text.make_title("ThInGs In MiXeD cAsE")
        self.assertEqual(tag,"thingsinmixedcase")

    def test_make_title_3(self):
        tag = grab_text.make_title("Sysbols#")
        self.assertEqual(tag,"sysbols")

  #  def test_warning_for_missinglink(self):
  #      grab_text.addfeedback=mock.Mock(return_value=None)
  #      prs = Presentation("CK20V2cutdown.pptx") #Can't use the sinlgeton because it might have been called before the mocking
  #      grab_text.gridSize=5
  #      grab_text.extract_grid(prs)
  #      grab_text.addfeedback.assert_called()

    def test_warning_for_missinglink(self):
        pageset = self.get_singleton_CK20()
        feedback=pageset.getfeedback()
        print feedback
        self.assertEqual(21,len(feedback))

    def test_correct_warning_for_blank_file(self):
        grab_text.gridSize=5
        pageset = grab_text.Pageset("blank.pptx","",False)
        print "################################################################################"
        print pageset.getfeedback()
        self.assertEqual(21,len(feedback))


    def test_regession_ck12(self):
        regress("regression_tests_size_4/CK12+V2.pptx",4)

    def test_regession_ck20_slo(self):
        regress("regression_tests_size_5/CK20_slo_regession.pptx",5)

    def test_regession_ck20v2_bg(self):
        regress("regression_tests_size_5/CK20V2.pptx",5)



def regress(filename,size):
        compare_json_files(filename,filename+".json", size)

def compare_json_files(pres_loc, target_loc, gridSize):
        grab_text.gridSize=gridSize
        grids = grab_text.Pageset(pres_loc,"",False).grids
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
