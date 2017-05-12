from unittest import TestCase
import unittest
import grab_text
import urllib
import json
import os


class ovfTest(TestCase):

    def test_first(self):
         self.assertEqual(3,3)



    def test_read_CK20_and_count_slides(self):
        prs = Presentation("testinputs/CK20V2.pptx")
        grids = extract_grid(prs)
        self.assertEqual(len(grids),3)

if __name__=="__main__":
    unittest.main()
