import grab_text
from pptx import Presentation
import json


def test_answer():
        assert grab_text.remove_punctuation("Joe's") == "Joes"

prs = Presentation("/Users/josephreddington/Dropbox/git/CommuniKate/ck20/CK20V2.pptx")
grab_text.gridSize =5
grids = grab_text.extract_grid(prs)
grids = grab_text.extract_and_label_images(prs, grids, "", False)
grab_text.write_to_JSON(grids, "CK20+V2.json")
