import tempfile
import json
import unittest
import sys
from unittest import TestCase
from pagesetparser.pageset import Pageset
import pagesetparser.core as core
sys.path.append('..') 



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
            self.assertIn("you suck",pageset.getfeedback())

    def test_absent_feedback(self):
            pageset = self.get_singleton_pageset()
            pageset.addfeedback("you don't suck")
            self.assertNotIn("you suck",pageset.getfeedback())

    def test_warn_about_multiple_names_in_feedback(self):
            pageset = self.get_singleton_pageset()
            pageset.scan_for_duplicates()
            self.assertIn("Warning: duplicate page label: case - Indices: 5, 6",pageset.getfeedback())
            self.assertIn("Warning: duplicate page label: breakfast - Indices: 7, 8, 9",pageset.getfeedback())
            #TODO add assert 
            
    def test_warn_about_unreachable_links_in_feedback(self):
            pageset = self.get_singleton_pageset()
            pageset.find_titles_without_links()
            for item in pageset.getfeedback():
                print(item)
            self.assertIn("Page with title 'foodchat' is unreachable",pageset.getfeedback())
            self.assertIn("Page with title 'blue' is unreachable",pageset.getfeedback())
            self.assertIn("Page with title 'red' is unreachable",pageset.getfeedback())


if __name__=="__main__":
    unittest.main()
