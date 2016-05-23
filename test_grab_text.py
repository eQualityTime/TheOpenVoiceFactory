import grab_text
def test_answer():
    assert grab_text.remove_punctuation("Joe's") == "Joes"
