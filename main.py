import argparse 
import sys
import pagesetparser.pagesetparser as parser
from pagesetparser.pageset import Pageset

if __name__ == "__main__": #TODO proper arg parse
    if (len(sys.argv) < 2):
        print("\nUsage: ./pagesetparser.py <inputPptxFile> <gridSize>\n")
        print("inputPptxFile: The powerpoint pageset you want to process.")
        print("gridSize: width of square grid, e.g. '4' for a 4x4 grid")
        sys.exit(1)
    filename = sys.argv[1]
    gridSize = 5
    if (len(sys.argv) > 2):
        gridSize = int(sys.argv[3])
    parser.gridSize=gridSize #TODO: what is this shit? 
    obf_dest='templates/data/'
    pageset = Pageset(filename, obf_dest, gridSize) #TODO: dest shouldn't appear here
    pageset.extract_and_label_images(obf_dest) #TODO - shouldn't be here at all. 


    # TODO - this should surely be pageset.write_to_obz(dest) (NOT obf) 
    parser.write_to_obf(pageset.grids, obf_dest)

