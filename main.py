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
    dest = sys.argv[2]
    gridSize = 5
    if (len(sys.argv) > 2):
        gridSize = int(sys.argv[3])
    parser.gridSize=gridSize #TODO: what is this shit? 
    obf_dest=dest+'/data/'
    pageset = Pageset(filename, ovf_dest, gridSize) #TODO: dest shouldn't appear here
    pageset.extract_and_label_images(ovf_dest) #TODO - shouldn't be here at all. 

    #TODO put these two lines into one function 
    pageset.write_json(dest+'/pageset.json')

    # TODO - this should surely be pageset.write_to_obz(dest) (NOT obf) 
    parser.write_to_obf(pageset.grids, ovf_dest)

