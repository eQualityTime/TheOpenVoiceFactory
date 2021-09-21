from unittest import TestCase
import urllib.request, urllib.parse, urllib.error
import json
import glob
import os
import sys
sys.path.append('../..')
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





def generate(filename, gridSize):
        prs = Presentation(filename)
        grab_text.gridSize = gridSize
        grids = grab_text.Pageset(filename,"",gridSize,False).grids
        internal = grab_text.create_json_object(grids)
        internal = json.dumps(internal)
        grab_text.write_to_JSON(grids, filename+".json")


if __name__=="__main__":
 for file in glob.glob("regression_tests_size_5/*.pptx"):
        print(file)
        generate(file,5)
 for file in glob.glob("regression_tests_size_4/*.pptx"):
        print(file)
        generate(file,4)


