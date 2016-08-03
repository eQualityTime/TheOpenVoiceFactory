import grab_text
from pptx import Presentation
import json


#def test_ck12v2():
#        compare_json_files(
#            "/Users/josephreddington/Dropbox/git/azulejoe/testinputs/CK12+V2.pptx",
#            "testinputs/CK12+V2.json", 4)
#
#
#def test_ck20v2():
#        compare_json_files(
#            "/Users/josephreddington/Dropbox/git/azulejoe/testinputs/CK20V2.pptx",
#            "testinputs/CK20V2.json", 5)
#
#
#def test_ck20v2_bg():
#        compare_json_files(
#            "/Users/josephreddington/Dropbox/git/azulejoe/testinputs/CK20V2-BG.pptx",
#            "testinputs/CK20V2-BG.json", 5)

def test_ck20v2firstpage():
        compare_json_files(
            "/Users/josephreddington/Dropbox/git/azulejoe/testinputs/CK20V2firstpagewithErrors.pptx",
            "testinputs/CK20V2firstpagewithErrors.json", 5)

def compare_json_files(pres_loc, target_loc, gridSize):
        prs = Presentation(pres_loc)
        grab_text.gridSize = gridSize
        grids = grab_text.extract_grid(prs)
        grids = grab_text.extract_and_label_images(prs, grids, "", False)
        internal = grab_text.create_json_object(grids)
        internal = json.dumps(internal)
        grab_text.write_to_JSON(grids, "temp.json")
        local = 0
        with open('/Users/josephreddington/Dropbox/git/azulejoe/temp.json', 'r') as f:
                local = json.load(f)
        with open(target_loc, 'r') as f:
                real = json.load(f)
                assert real == local
