function import_json() {
    key = "toppage";
    utterances = {};
    links = {};
    colours = {};
    icons = {};
    labels = {};
    slide_number = {};
    var req = new XMLHttpRequest();
    req.open("GET", "pageset.json");
    req.overrideMimeType("application/json");
    req.send(null);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var obj = JSON.parse(req.responseText);
            for (grid in obj.Grid) {
                labels[obj.Grid[grid][0]] = obj.Grid[grid][1];
                utterances[obj.Grid[grid][0]] = obj.Grid[grid][2];
                links[obj.Grid[grid][0]] = obj.Grid[grid][3];
                icons[obj.Grid[grid][0]] = obj.Grid[grid][4];
                colours[obj.Grid[grid][0]] = obj.Grid[grid][5];
                slide_number[obj.Grid[grid][0]] = obj.Grid[grid][6];
            }
            grid_size_rows = obj.Settings[0];
            grid_size_columns = obj.Settings[0];
            setup();
            set_colour();
        }
    };
}
    import_json();

function setup() {
    my_width = 720 / grid_size_columns * (Math.ceil(grid_size_columns / 2));
    my_height = 520 / grid_size_rows;
    area = document.getElementById('messagewindow');
    $(area).css('width', my_width);
    $(area).css('left', (720 / grid_size_columns) + 7);
    $(area).css('top', 105) ;
    $(area).css('height', my_height);
    var table = document.getElementById("mainGrid");
    table.className="four";
    if (grid_size_rows==5){
	    table.className="five";
    }	
    for(y=0;y<grid_size_rows;y++){
    var row = table.insertRow(0);
    for (x=0;x<grid_size_rows;x++){
	  cell=  row.insertCell(0);
	cell.style.textAlign = "center";
	cell.style.verticalAlign = "center";
	
    }
}
}

function set_colour() {
img_class="five";
if (grid_size_rows!=5){
img_class="four";
}
    x = 0; y = 0;
    for (x = 0; x < grid_size_rows; x++) {
        for (y = 0; y < grid_size_rows; y++) {
            if (links[key][y][x]) {
                $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').addClass('note')
            } else {
                $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').removeClass('note')
            }
            $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').css('background-color', "rgb(" + colours[key][y][x] + ")")
            if (labels[key][y][x] == "") {
                if (links[key][y][x] == "") {
                    if (icons[key][y][x] == "") {
                        //everything blank
                        $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("")
                    } else {
                        //NO label or link just an image
                        $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("<br><IMG src=\"" + icons[key][y][x]+ "\" class=\""+img_class+"\">")
                    }
                } else {
                    //link with NO label
                    $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("<b>" + labels[key][y][x] + "</b><br><IMG src=\"" + icons[key][y][x] + "\" class=\""+img_class+"\">")
                }
            } else {
                if (labels[key][y][x] == "") {
                    $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("<b>" + labels[key][y][x] + "</b><br><IMG src=\"" + icons[key][y][x] + "\" class=\""+img_class+"\" >")
                } else {
                    $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')').html("<b>" + labels[key][y][x] + "</b><br><IMG src=\"" + icons[key][y][x] + "\" class=\""+img_class+"\" >")
                }
            }
        }
    }
}

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
    myRef = window.open('http://www.google.co.uk/images?q=' + temp, 'search');
}
//this function simply puts the message window in a URL and opens it in a separate page,  in this case to search YouTube
function tube() {
    var temp = document.myform.outputtext.value;
    temp.replace(' ', '+');
    myRef = window.open('http://www.youtube.com/results?search_query=' + temp + '&search_type=&aq=0', 'search');
}
//The main function. First checks for an utterance to add, and then checks if a link should be activated. Within the utterance code we check the length of an addition - if it is a single character we assume that the user is spelling something and we do not insert the extra space.
//called from the html
function add(i, j) {
    if (links[key][i][j] == "") {
        if (labels[key][i][j].length == 1) { //so that we can spell with the single letter buttons
            document.myform.outputtext.value += labels[key][i][j];
        } else {
            document.myform.outputtext.value += " " + labels[key][i][j];
        }
    }
    if (links[key][i][j].includes("special::")){
	    processSpecial(links[key][i][j]);

    }else if (links[key][i][j] != "") {
	    switch (links[key][i][j]) {
		    //There are two special cases for links - clearing the message window, deleting the last word from the message window. Further special behaviours (volume change and the like) could be added here.
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
		    case "special::unfinnished":
			    alert("This feature is unimplemented on the web demo");
			    break;
		    case "1":
			    key = "top_page";
			    break;
		    default:
			    //alert(key+" "+i+" "+j)
			    key = (links[key][i][j]);
			    set_colour();
        }
    }
}

function processSpecial(command){
var commandArray=command.split(';');//there's going to be a problem with inserting a semicolon...
for (i=0;i<commandArray.length;i++){
	switch (commandArray[i]){
        case "special::clear":
            document.myform.reset();
            break;
        case "special::deleteword":
	    (function(){var lastIndex = document.myform.outputtext.value.lastIndexOf(" ");
	     document.myform.outputtext.value = document.myform.outputtext.value.substring(0, lastIndex);})();
	default:
	    parts=commandArray[i].split("%22")
		    if (parts[0].includes("place"))
		    {
			    document.myform.outputtext.value += parts[1].split("%20").join(" ")
		    }else if (parts[0].includes("open")){
			    key=parts[1]
			    set_colour();

		    }

	    break;
	}
	}


}

//calls the perl script that creates the *.wav file from the text given. This part requires an internet connection unless you can retarget to a local system (on a mac, for example, one can make a call to the command line utility 'say').
function makeWav() {
	$.get("getsound.pl?text=" + document.myform.outputtext.value + "&filename=" + SHA1(document.myform.outputtext.value));
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

var azulejoe_scanning = false;

function trigger_on_scan() {
	if (azulejoe_scanning == true) {
		if (y == 0) {
			if (x >= Math.floor(grid_size_columns / 4)) {
				if (x < Math.ceil(grid_size_columns * 0.75)) { //testing if we are in the message window
					makeWav();
					return;
				}
			}
		}
	}
	add(x, y);
}
document.body.onkeydown = function (e) {
	trigger_on_scan()
};
$('#mainGrid').click(function (e) {
		if (azulejoe_scanning == true) {
		trigger_on_scan();
		} else {
		rows = grid_size_rows;
		colums = grid_size_columns;
		offset_t = $(this).offset().top - $(window).scrollTop();
		offset_l = $(this).offset().left - $(window).scrollLeft();
		//alert(offset_t+" "+ $(this).offset().top+" "+$(window).scrollTop())
		//percentage_accross=(Math.round((e.clientX - offset_l)) / this.width)
		distance_down_in_table = e.clientY - offset_t
		percentage_down = (Math.round((e.clientY - offset_t)) / 540)
		//alert(offset_t+" "+e.clientY+" "+" "+distance_down_in_table+" "+percentage_down)
		var left = Math.floor(Math.round((e.clientX - offset_l)) / this.width * colums);
		var our_top = Math.floor(Math.round((e.clientY - offset_t)) / 540 * rows);
		if (our_top < grid_size_columns) {
		if (left < grid_size_columns) {
		add(left, our_top)
		}
		}
		}
});
//credit http://stackoverflow.com/a/14045047/170243
function toggleScanning() {
	if (azulejoe_scanning == true) {
		azulejoe_scanning = false;
		stop_scanning();
	} else {
		azulejoe_scanning = true
			start_scanning();
	}
}
main = document.getElementById("mainGrid");
var offset_t = $(main).offset().top //- $(window).scrollTop();
var offset_l = $(main).offset().left //- $(window).scrollLeft();
var interval_access_var = 0

function start_scanning() {
	if (azulejoe_scanning == true) {
		hope = document.getElementById("box");
		$(hope).css('position', "absolute");
		$(hope).css('width', 720 / grid_size_rows);
		$(hope).css('height', 520 / grid_size_columns);
		$(hope).css('top', offset_t + 105 * y);
		$(hope).css('left', offset_l + 140 * x);
        //$(hope).css('top', offset_t);
        //$(hope).css('left', offset_l);
        $(hope).css('border', "4px solid #ffbe00");
        $(hope).css('background-color', "transparent");
        interval_access_var = setInterval(itterate_direct_Scanner, 1000);
    }
}
var x = 0;
var y = 0;

function stop_scanning() {
    hope = document.getElementById("box");
    $(hope).css('position', "absolute");
    $(hope).css('width', "0px");
    $(hope).css('height', "0px");
    $(hope).css('top', 0);
    $(hope).css('left', 0);
    $(hope).css('border', "0px  #ffbe00");
    $(hope).css('background-color', "transparent");
    clearInterval(interval_access_var);
}

function itterate_direct_Scanner() {
    x++;
    //alert(grid_size_rows+" "+x);
    if (x >= grid_size_rows) {
        x = 0;
        y = y + 1;
    }
    if (y >= grid_size_columns) {
        y = 0;
    }
    $(hope).css('top', offset_t + (520 / grid_size_rows) * y);
    $(hope).css('left', offset_l + (720 / grid_size_columns) * x);
}

