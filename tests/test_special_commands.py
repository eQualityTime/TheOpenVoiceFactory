from unittest import TestCase
import tempfile
import unittest
#import mock
import urllib.request, urllib.parse, urllib.error
import json
import os
import sys
sys.path.append('..') 
import pagesetparser.pagesetparser as pagesetparser
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




class ovfTestCommands(TestCase):



    def test_process_commandstring(self):
        button={}
        commandstring='ovf(place("hello"))'
        pagesetparser.process_commandstring(commandstring,button)
        self.assertEqual(button["vocalization"],"hello")

    def test_process_commandstring_single_quotes(self):
        button={}
        commandstring="ovf(place('hello'))"
        pagesetparser.process_commandstring(commandstring,button)
        self.assertEqual(button["vocalization"],"hello")


    def test_process_commandstring_with_comma(self):
        button={}
        commandstring='ovf(place(", hello"))'
        pagesetparser.process_commandstring(commandstring,button)
        self.assertEqual(button["vocalization"],", hello")

    def test_process_commandstring_with_open(self):
        button={}
        commandstring='ovf(open("jazz"))'
        pagesetparser.process_commandstring(commandstring,button)
        self.assertEqual(button["load_board"]["path"], "boards/jazz.obf")

    def test_process_commandstring_with_two_commands(self):
        button={}
        commandstring='ovf(open("jazz"),place("goodbye"))'
        pagesetparser.process_commandstring(commandstring,button)
        self.assertEqual(button["load_board"]["path"], "boards/jazz.obf")
        self.assertEqual(button["vocalization"],"goodbye")

    def test_process_commandstring_with_double_places(self):
        button={}
        commandstring='ovf(place("jazz"),place("goodbye"))'
        pagesetparser.process_commandstring(commandstring,button)
        self.assertEqual(button["vocalization"],"jazzgoodbye")

if __name__=="__main__":
    unittest.main()
