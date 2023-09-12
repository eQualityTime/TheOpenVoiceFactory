import argparse 
import sys
from pagesetparser.pageset import Pageset

if __name__ == "__main__": #Put in a proper arg parse when you have more parameters 
    if (len(sys.argv) < 2):
        print("\nUsage: ./pagesetparser.py <inputPptxFile> <gridSize>\n")
        print("inputPptxFile: The powerpoint pageset you want to process.")
        print("gridSize: width of square grid, e.g. '4' for a 4x4 grid")
        sys.exit(1)
    filename = sys.argv[1]
    gridSize=5
    if (len(sys.argv) > 2):
        gridSize = int(sys.argv[3])
    obf_dest='templates/data/'
    pageset = Pageset(filename, gridSize) 
    pageset.write_to_obz(obf_dest)

