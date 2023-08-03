import unicodedata
import urllib
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
        return '{} EXCEPTION IN ({}, LINE {} "{}"): {}'.format(exc_type,
                filename, lineno, line.strip(), exc_obj)

def make_title(label): #This is used by the Grid a lot, but also for processing special commands and creating links, so it can stay here for a while
    """Given a  string, returns the string in the format we use for
     identifying grids. This is used mostly to build internal link
     structures"""
    tag = remove_punctuation(label.lower().strip().replace(" ", "_").replace("%20","_"))
    if tag == "":
        tag = "unknown"
    return tag


import unicodedata

def remove_punctuation(s):
    """
    Removes punctuation from a given string.
    
    >>> remove_punctuation('something')
    'something'
    
    >>> remove_punctuation('something.,:else really')
    'somethingelse really'
    """
    return ''.join(char for char in s if not unicodedata.category(char).startswith('P'))



def process_commandstring(commandstring,button): 
    # this doesn't cope with ovf(hello, there) (which is fine because we don't have any relevant commands. Someday we shall need a proper recursive decent parser 
    commandstring=commandstring.replace("ovf(","")[:-1] # removes trailing ")" 
    commandstring=urllib.parse.unquote(commandstring)  #For decoding %20 ect 
    import re 
    commands=re.split("\)\s*,",commandstring) #should split on the comma surely? oh, but there might be commas in the string!
    for command in commands:
        print("XXX")
        print(command)
        process_single_command(command,button)  

def process_single_command(command,button): 
    command_name= command.split("(",1)[0]
    print(f"command name: {command_name}")
    argument=command.split("(",1)[1].replace("\"","").replace(")","").replace("\'","")
    print(f"argument name: {argument}")
    if command_name == "deleteword":
        button["action"]=":deleteword"
    elif command_name == "backspace":
        button["action"]=":backspace"
    elif command_name == "clear":
        button["action"]=":clear"
    elif command_name == "place":
        button["vocalization"] = button.setdefault("vocalization","")+argument.strip('"\'') #If there are multiple place commands, keep appending them.  
    elif command_name == "open":
        button["load_board"]= { "path": "boards/"+make_title(argument)+".obf" }
    elif command_name == "unfinnished":
         pass
    elif command_name == "blank":
         pass
    else:
        raise ValueError('Exception: Unknown special command_name ({}) to process in slide {} row {} col {}'.format(command_name, grid.tag,row, col))
