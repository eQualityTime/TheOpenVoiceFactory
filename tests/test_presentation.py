import tempfile
import json
import unittest
import sys
from unittest import TestCase
from pagesetparser.pageset import Pageset
import pagesetparser.core as core
sys.path.append('..') 

import logging
logging.basicConfig(level=logging.ERROR)
logger = logging.getLogger(__name__)


# These are the tests for the grid 
class presentationTest(TestCase):

    CK20=None #This is the pageset

    def get_singleton_pageset(self):
        if not self.CK20:
            self.CK20 = Pageset("tests/testinputs/CK20V2cutdownWarningsLoop.pptx",5, False) 
        return self.CK20

    def test_in_the_right_place(self):
            pageset = self.get_singleton_pageset()
            self.assertEqual("toppage",pageset.grids[0].title)


    def test_feedback_in(self):
            pageset = self.get_singleton_pageset()
            pageset.addfeedback("you suck")
            self.assertIn("you suck",pageset.feedback)

    def test_absent_feedback(self):
            pageset = self.get_singleton_pageset()
            pageset.addfeedback("you don't suck")
            self.assertNotIn("you suck",pageset.feedback)


    def test_notice_there_is_no_grid(self):
            with self.assertRaises(Exception): 
                pageset = Pageset("tests/testinputs/break.pptx",5,False)
            

    def test_warn_about_multiple_names_in_feedback(self):
            pageset = self.get_singleton_pageset()
            pageset.scan_for_duplicates()
            self.assertIn("Warning: duplicate page label: case - Indices: 5, 6",pageset.feedback)
            self.assertIn("Warning: duplicate page label: breakfast - Indices: 7, 8, 9",pageset.feedback)
            #TODO add assert 
            
    def test_warn_about_unreachable_links_in_feedback(self):
            pageset = self.get_singleton_pageset()
            pageset.find_titles_without_links()
            self.assertIn("Page with title 'foodchat' is unreachable",pageset.feedback)
            self.assertIn("Page with title 'blue' is unreachable",pageset.feedback)
            self.assertIn("Page with title 'red' is unreachable",pageset.feedback)


if __name__=="__main__":
    unittest.main()
