key = "top_page"
grid_size_rows = 4
grid_size_columns = 4
utterances = {}
links = {}
colours = {}
icons = {}
labels = {}
slide_number = {}
var req = new XMLHttpRequest();
req.open("GET", "data.json");
req.overrideMimeType("application/json");
req.send(null);
req.onreadystatechange = function() {
    if (req.readyState == 4 && req.status == 200) {
        var obj = JSON.parse(req.responseText)
        for (grid in obj) {
            labels[obj[grid][0]] = obj[grid][1]
            utterances[obj[grid][0]] = obj[grid][2]
            links[obj[grid][0]] = obj[grid][3]
            icons[obj[grid][0]] = obj[grid][4]
            colours[obj[grid][0]] = obj[grid][5]
            slide_number[obj[grid][0]] = obj[grid][6]
        }
        //		for(key in slide_number){
        //			document.write("<br><br>Name is"+key);
        //				document.write("<br> is"+slide_number[key]);
        //		}
        set_colour()
    }
}


function set_colour() {
    x = 0, y = 0
    for (x = 0; x < grid_size_rows; x++) {
        for (y = 0; y < grid_size_rows; y++) {
            $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').css('background-color', "rgb(" + colours[key][y][x] + ")")

            if (utterances[key][y][x] == "") {
                if (links[key][y][x] == "") {
                    $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("")
                } else {
                    $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("<b>" + labels[key][y][x] + "</b><br><IMG src=\"icons/" + slide_number[key] + "-" + y + "-" + x + ".png\" >")
                }
            } else {
                if (labels[key][y][x] == "") {
                   // $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("<b>" + utterances[key][y][x] + "</b><br><IMG src=\"icons/" + slide_number[key] + "-" + y + "-" + x + ".png\" >")
                    $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("<b>" + utterances[key][y][x] + "</b><br><IMG src=\"" + icons[key][y][x]+ "\" >")

                } else {
                    $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("<b>" + labels[key][y][x] + "</b><br><IMG src=\"" + icons[key][y][x]+ "\" >")
                }

            }
        }



    }
}

function pad(num) {
    var s = "000" + num;
    return s.substr(s.length - 3);
} //from http://stackoverflow.com/a/2998822/170243

//the utterances array contain the actual text that can be placed on the message window

//the links array contains keywords that perform different functions,  the most obvious one is that if the links array contains the name of another page, then it will cause a jump to that page when activated.  Other options include things like 'clear' and 'delete word' 

//Note that if the utterance and links are are *both* set, then the utterance will activate and *then* the link will activate.

function voiceinit() {
    var i, j;
    var voice = new ActiveXObject("SAPI.SpVoice");
}


function speak() {
    var voice = new ActiveXObject("SAPI.SpVoice");
    voice.Speak(document.myform.outputtext.value);
}

//this function simply puts the message window in a URL and opens it in a separate page,  in this case to tweet
function tweet() {
    var twtTitle = document.myform.outputtext.value;
    var maxLength = 140;
    if (twtTitle.length > maxLength) {
        twtTitle = twtTitle.substr(0, (maxLength - 3)) + '...';
    }
    var twtLink = 'http://twitter.com/intent/tweet?text=' + document.myform.outputtext.value.replace(" ", "%20");
    window.open(twtLink);

}

//this function simply puts the message window in a URL and opens it in a separate page,  in this case to search Google Images
function image() {
    var temp = document.myform.outputtext.value;
    temp.replace(' ', '+');
    myRef = window.open('http://www.google.co.uk/images?q=' +
        temp, 'search');
}


//this function simply puts the message window in a URL and opens it in a separate page,  in this case to search YouTube
function tube() {
    var temp = document.myform.outputtext.value;
    temp.replace(' ', '+');
    myRef = window.open('http://www.youtube.com/results?search_query=' +
        temp + '&search_type=&aq=0', 'search');

}


//The main function. First checks for an utterance to add, and then checks if a link should be activated. Within the utterance code we check the length of an addition - if it is a single character we assume that the user is spelling something and we do not insert the extra space. 
function add(i, j) {

    if (utterances[key][i][j] != "link") {
        if (utterances[key][i][j] == "Clear") {
            document.myform.reset();
            return;
        }
        if (utterances[key][i][j].length == 1) { //so that we can spell with the single letter buttons
            document.myform.outputtext.value += utterances[key][i][j];
        } else {
            document.myform.outputtext.value += " " + utterances[key][i][j];
        }
    }
    if (links[key][i][j] != "") {
        switch (links[key][i][j]) {
            //There are two special cases for links - clearing the message window, deleting the last word from the message window. Further special behaviours (volume change and the like) could be added here. 
            case "clear":
                document.myform.reset();
                break;
            case "deleteword":
                var lastIndex = document.myform.outputtext.value.lastIndexOf(" ");
                document.myform.outputtext.value = document.myform.outputtext.value.substring(0, lastIndex);
                break;
            case "Backspace":
                document.myform.outputtext.value = document.myform.outputtext.value.substring(0, document.myform.outputtext.value.length - 1);
                break;
            case "speak":
                makeWav();
                break;
            case "google":
                image();
                break;
            case "youtube":
                tube();
                break;
            case "twitter":
                tweet();
                break;
            case "1":
                key = "top_page";
                break;
            default:
                key = (links[key][i][j]);
                set_colour();
        }
    }
}

//calls the perl script that creates the *.wav file from the text given. This part requires an internet connection unless you can retarget to a local system (on a mac, for example, one can make a call to the command line utility 'say').
function makeWav() {
    $.get(("getsound.pl?text=" + document.myform.outputtext.value + "&filename=" + SHA1(document.myform.outputtext.value)));
    setTimeout(callback, 500);
    _gaq.push(["_trackEvent", "azulejoe", "speak", "makeWav", 5, true]);
    return false;
}
//used within the above function - callback plays the wave that was created in makeWav() but only when it has finnished loading. 
function callback() {
    utter = document.myform.outputtext.value;
    //the cb peramater is to force a reload, see http://stackoverflow.com/a/25823431/170243
    var url = SHA1(document.myform.outputtext.value) + ".wav?cb=" + new Date().getTime();
    var audio = new Audio(url);
    audio.load();
    audio.play();
}

function top_page() {

}
