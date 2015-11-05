        utterances = new Array(grid_size_rows);
        for (j = 0; j < grid_size_rows; j++) {
        utterances[j] = new Array(grid_size_rows);
	}
        //the utterances array contain the actual text that can be placed on the message window

        links = new Array(grid_size_rows);
        for (j = 0; j < grid_size_rows; j++) {
        links[j] = new Array(grid_size_rows);
	}
        //the links array contains keywords that perform different functions,  the most obvious one is that if the links array contains the name of another page, then it will cause a jump to that page when activated.  Other options include things like 'clear' and 'delete word' 

        colour = new Array(grid_size_rows);
        for (j = 0; j < grid_size_rows; j++) {
        colour[j] = new Array(grid_size_rows);
	}
        //Note that if the utterance and links are are *both* set, then the utterance will activate and *then* the link will activate.

        function voiceinit() {
            var i, j;
            reset();
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

        function reset() {
            var i, j
            for (j = 0; j < grid_size_rows; j++) {
                for (i = 0; i < grid_size_rows; i++) {
                    utterances[i][j] = "link";
                    links[i][j] = "blank";
                }
            }
            links[3][0] = "speak";

        }

        //The main function. First checks for an utterance to add, and then checks if a link should be activated. Within the utterance code we check the length of an addition - if it is a single character we assume that the user is spelling something and we do not insert the extra space. 
        function add(i, j) {
            if (utterances[i][j] != "link") {
                if (utterances[i][j] == "Clear") {
                    document.myform.reset();
                    return;
                }
                if (utterances[i][j].length == 1) { //so that we can spell with the single letter buttons
                    document.myform.outputtext.value += utterances[i][j];
                } else {
                    document.myform.outputtext.value += " " + utterances[i][j];
                }
            }
            if (links[i][j] != "blank") {
                switch (links[i][j]) {
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
                        top_page();
                        break;
                    default:
                        eval(links[i][j] + "()");
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
