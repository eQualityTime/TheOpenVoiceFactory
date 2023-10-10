import argparse 
import sys
from pagesetparser.pageset import Pageset
import logging
import os
from pathlib import Path



logging.basicConfig(level=logging.WARN)
logging.info('Logger has been created')


if __name__ == "__main__": #Put in a proper arg parse when you have more parameters 
    if (len(sys.argv) < 2):
        print("\nUsage: ./pagesetparser.py <inputPptxFile> <gridSize>\n")
        print("inputPptxFile: The powerpoint pageset you want to process.")
        print("gridSize: width of square grid, e.g. '4' for a 4x4 grid")
        sys.exit(1)
    filename_with_path = sys.argv[1].strip("'")
    if os.path.exists(filename_with_path):
        pass
    else:
        with open("feedback.html", "w", encoding="utf-8") as file:
            file.write(f"The file {filename_with_path} does not exist.")
        sys.exit(1)
    gridSize=5
    if (len(sys.argv) > 2):
        gridSize = int(sys.argv[3])
    obf_dest='templates/data/'
    try:
        pageset = Pageset(filename_with_path, gridSize) 
        pageset.write_to_obz(obf_dest)
        with open("feedback.html", "w", encoding="utf-8") as file:
            file.write(pageset.feedback_as_html)
    except ValueError: 
        #TODO put in logging
        file_path = Path(filename_with_path)
        file_name = file_path.name
        with open("feedback.html", "w", encoding="utf-8") as file:
            file.write('<ul><li style="color: red;">Error: the input file does not appear to be in PowerPoint Format</li></ul>')
        sys.exit(1)
#

