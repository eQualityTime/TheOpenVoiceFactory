import argparse 
import sys
import pagesetparser.pagesetparser as parser
from pagesetparser.pageset import Pageset

if __name__ == "__main__":
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
    parser.gridSize=gridSize
    obf_dest=dest+'/data/'
    pageset = Pageset(filename, ovf_dest, gridSize)
    pageset.extract_and_label_images(ovf_dest)
    parser.write_to_JSON(pageset.grids, dest+'/pageset.json')
    parser.create_ovf_manifest(dest+'/manifest.json')
    parser.write_to_obf(pageset.grids, ovf_dest)

