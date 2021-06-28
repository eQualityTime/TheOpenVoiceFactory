import unicodedata
import sys
import string
import linecache


print_exceptions = True

def returnException():
    # http://stackoverflow.com/a/20264059
    if print_exceptions is True:
        exc_type, exc_obj, tb = sys.exc_info()
        f = tb.tb_frame
        lineno = tb.tb_lineno
        filename = f.f_code.co_filename
        linecache.checkcache(filename)
        line = linecache.getline(filename, lineno, f.f_globals)
        return 'EXCEPTION IN ({}, LINE {} "{}"): {}'.format(
                filename, lineno, line.strip(), exc_obj)

def make_title(label):
    """Given a  string, returns the string in the format we use for
     identifying grids. This is used mostly to build internal link
     structures"""
    tag = remove_punctuation(label.lower().strip().replace(" ", "_").replace("%20","_"))
    if tag == "":
        tag = "unknown"
    return tag



def remove_punctuation(s):
    """
    >>> strip_punctuation(u'something')
    u'something'

    >>> strip_punctuation(u'something.,:else really')
    u'somethingelse really'
    """
    text = s
    if not isinstance(s, type("hope")):
        text = str(s, "utf-8")
    punctutation_cats = set(['Pc', 'Pd', 'Ps', 'Pe', 'Pi', 'Pf', 'Po'])
    return ''.join(x for x in text
                   if unicodedata.category(x) not in punctutation_cats)

