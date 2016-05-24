import grab_text
from pptx import Presentation
import json


def test_answer():
    assert grab_text.remove_punctuation("Joe's") == "Joes"

def test_CK20():
    prs = Presentation("/Users/josephreddington/Dropbox/git/CommuniKate/ck20/CK20.pptx")
    grab_text.gridSize =5
    grids = grab_text.extract_grid(prs)
    grids = grab_text.extract_and_label_images(prs, grids, "", False)
    internal=grab_text.create_json_object(grids)
    internal=json.dumps(internal)
    grab_text.write_to_JSON(grids,"temp.json")
    local=0
    with open('/Users/josephreddington/Dropbox/git/azulejoe/temp.json', 'r') as f:
        local = json.load(f)
    with open('/Users/josephreddington/Dropbox/git/azulejoe/CK20V2.json', 'r') as f:
        real = json.load(f)
        assert real==local
