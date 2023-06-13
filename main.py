import argparse 
import sys
import pagesetparser.pagesetparser as parser
from pagesetparser.pageset import Pageset

if __name__ == "__main__": #TODO Put in a proper arg parse 
    if (len(sys.argv) < 2):
        print("\nUsage: ./pagesetparser.py <inputPptxFile> <gridSize>\n")
        print("inputPptxFile: The powerpoint pageset you want to process.")
        print("gridSize: width of square grid, e.g. '4' for a 4x4 grid")
        sys.exit(1)
    filename = sys.argv[1]
    parser.gridSize=5
    if (len(sys.argv) > 2):
        parser.gridSize = int(sys.argv[3])
    obf_dest='templates/data/'
    pageset = Pageset(filename, parser.gridSize) 
    parser.write_to_obz(pageset.grids, obf_dest)

