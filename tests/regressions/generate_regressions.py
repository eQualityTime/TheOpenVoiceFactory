from unittest import TestCase
import urllib.request, urllib.parse, urllib.error
import json
import glob
import os
import sys
sys.path.append('../..')
import pagesetparser
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
import hashlib
import pagesetparser.pagesetparser as parser
from pagesetparser.pageset import Pageset



def sha256sum(filename):
    h  = hashlib.sha256()
    b  = bytearray(128*1024)
    mv = memoryview(b)
    with open(filename, 'rb', buffering=0) as f:
        for n in iter(lambda : f.readinto(mv), 0):
            h.update(mv[:n])
    return h.hexdigest()

def generate_hash(filename,gridSize): 
        gridSize = 5
        parser.gridSize=gridSize
        obf_dest='../obf/data/'
        pageset = Pageset(filename,obf_dest, gridSize)
        pageset.extract_and_label_images(obf_dest)
        parser.write_to_obf(pageset.grids, obf_dest)
        hashis=sha256sum(obf_dest+'pageset.obz')
        print(f"{hashis} is the hash value for {filename}")

def generate(filename, gridSize):
        prs = Presentation(filename)
        grids = pagesetparser.Pageset(filename,"",gridSize,False).grids
        internal = pagesetparser.create_json_object(grids)
        internal = json.dumps(internal)
        pagesetparser.write_to_JSON(grids, filename+".json")


if __name__=="__main__":

 for file in glob.glob("regression_tests_size_5/*.pptx"):
        print(file)
        generate_hash(file,5)
 for file in glob.glob("regression_tests_size_4/*.pptx"):
        print(file)
        generate_hash(file,4)






