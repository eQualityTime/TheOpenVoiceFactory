var fileType;

function setupInternalDataStructuresObf(responseText) {
    errorMsg = '';
    
    try {
        key = "";
        utterances = {};
        links = {};
        colours = {};
        icons = {};
        labels = {};
        slide_number = {};
    
        var rows = 0;
        var columns = 0;
        var boardname = "";
        
        var grid = []; //Array to hold all the button ids in their position in the grid
        var gridRow = []; //Array to hold one rows worth of button ids
        var imageArray = []; //Array to hold all obf images to be assigned to the correct location in the ovf icon object
        var buttonGrid = []; //Array to hold all the defined buttons
        var soundsArray = [];
        
        var labelRow = []; //One row of labels
        var labelPage = []; //A page of labels (rows and columns)
        
        var iconRow = [];
        var iconPage = [];
        
        var soundRow = [];
        var soundPage = [];
        
        var colorRow = [];
        var colorPage = [];

        var externalBoardRow = [];
        var externalBoardPage = [];

        //Setup add methods
        labels.addPage = function(pagename, pageOfLabels) {
            this[pagename] = pageOfLabels;
        };
        
        icons.addPage = function(pagename, pageOfIcons) {
            this[pagename] = pageOfIcons;
        };
        
        utterances.addPage = function(pagename, pageOfSounds) {
            this[pagename] = pageOfSounds;
        };
        
        colours.addPage = function(pagename, pageOfColors) {
            this[pagename] = pageOfColors;
        };

        links.addPage = function(pagename, pageOfExternalBoard) {
            this[pagename] = pageOfExternalBoard;
        };

        let obfInput = JSON.parse(responseText);
        if(obfInput.format === "open-board-0.1") { //We are reading a valid obf file
    
            //Get the grid size
            let numberOfCells = obfInput.grid.order.length;
            rows = obfInput.grid.rows; //Total number of rowsr
            columns = obfInput.grid.columns; //Total number of columns

            boardname = obfInput.name;

            if(obfInput.name){
                
            } else {
                throw "No page name defined";
            }
                
            
            //Load the grid array
            for (row=0; row<rows; row++) {
                for (column=0; column<columns; column++) {
                    gridRow.push(obfInput.grid.order[row][column]);
                }
                grid.push(gridRow); //Copy the whole row into the grid
                gridRow = []; //Clears the array (actually creates a new array)
            }
            

            if (typeof obfInput.images != 'undefined' && obfInput.images.length > 0) {
                //Load images from obf into the local array
                var imageCount = obfInput.images.length;
                for (i=0;i<imageCount; i++) { 
                    let image = obfInput.images[i];
                    if(image.url) {
                        imageArray.push(new Image(image.id, image.url));
                    } else if(image.data) {
                        imageArray.push(new Image(image.id, image.data));
                    } else {
                        imageArray.push(new Image(image.id, ""));
                    }
                }
            }
            
            
            //Load Buttons into the local array
            for (i=0; i<obfInput.buttons.length; i++) {
                let button = obfInput.buttons[i];
                var external_board = "";
                if (button.load_board) {
                    external_board = button.load_board.path;
                }
                buttonGrid.push(new Button(button.id, button.label, button.image_id, button.sound_id, button.background_color, external_board));
            }
                
            //Load sounds into the local array
            if (typeof obfInput.sounds != 'undefined' && obfInput.sounds.length > 0) {
                for (i=0; i<obfInput.sounds.length; i++) {
                    let sound = obfInput.sounds[i];
                    let soundURL = (sound.url) || "";
                    soundsArray.push(new Sound(sound.id, soundURL));
                }
            }
            
            //Now construct the ovf array style
            for(row=0; row<rows; row++)  {
                for(column=0; column<columns; column++) {
                    //We need to find the button id at this position in the grid to get the corresponding element ids and 
                    //add them to the labels/Icons/Utterances arrays, a row at a time
                    if( (grid[row][column] === null) || (grid[row][column] === '')) { //This position is null
                        labelRow.push("");
                        iconRow.push("");
                        soundRow.push("");
                        colorRow.push("");
                        externalBoardRow.push("");
                    } else {
                        thisLabel = buttonGrid.find(x => x.id === grid[row][column]);
                        labelRow.push(thisLabel.label);
                        colorRow.push(rgbObject2Array(thisLabel.color));
                        
                        if (typeof thisLabel.imageId != 'undefined') {
                            let iconId = imageArray.find(x => x.imageId === thisLabel.imageId);
                            if (iconId) {
                                iconRow.push(iconId.url);
                            } else {
                                errorMsg += "Image reference is not defined";
                            }
                        } else {
                            iconRow.push(""); //There is no image associated with this button
                        }
                        
                        if (typeof thisLabel.soundId != 'undefined') {
                            let soundId = soundsArray.find(x => x.key === thisLabel.soundId);
                            if (soundId) {
                                soundRow.push(soundId.url);
                            } else {
                                errorMsg += "Sound reference is not defined";
                            }                            
                        } else {
                            soundRow.push(""); //No sound associated with this button
                        }

                        if (typeof thisLabel.external_board != 'undefined') {
                            let externalBoard = externalBoardRow.push(thisLabel.external_board);
                        } else {
                            externalBoardRow.push("");
                        }
                    }
                    
                }
                labelPage.push(labelRow);          
                labelRow = [];
                
                iconPage.push(iconRow);
                iconRow = [];
                
                soundPage.push(soundRow);
                soundRow = [];
                
                colorPage.push(colorRow);
                colorRow = [];

                externalBoardPage.push(externalBoardRow);
                externalBoardRow = [];
            }

            labels.addPage(boardname, labelPage);
            icons.addPage(boardname, iconPage);
            utterances.addPage(boardname, soundPage);
            colours.addPage(boardname, colorPage);
            links.addPage(boardname, externalBoardPage);
            key = boardname;

            grid_size_rows = rows;
            grid_size_columns = columns; //Global variables for rows and columns

            grid_Setter(buttonGrid);
            sound_Getter(soundsArray);
            images_Setter(imageArray);
        } else {
            throw "Invalid JSON format";
        }
        console.log("Finished reading");
    } catch(Error) {
        console.log("Expection: ", Error);
        errorMsg += Error;
    }
}

function setupInternalDataStructures(responseText){
    //key = "toppage";
    utterances = {};
    links = {};
    colours = {};
    icons = {};
    labels = {};
    slide_number = {};
    
    var obj = JSON.parse(responseText);
            for (grid in obj.Grid) {
                console.log(obj.Grid[grid][0]);
                labels[obj.Grid[grid][0]] = obj.Grid[grid][1];
                utterances[obj.Grid[grid][0]] = obj.Grid[grid][2];
                links[obj.Grid[grid][0]] = obj.Grid[grid][3];
                icons[obj.Grid[grid][0]] = obj.Grid[grid][4];
                colours[obj.Grid[grid][0]] = obj.Grid[grid][5];
                slide_number[obj.Grid[grid][0]] = obj.Grid[grid][6];
                if (obj.Grid[grid][6] == 0) {
                    key = obj.Grid[grid][0]; //Sets global key to the name of the first page
                }
            }
            grid_size_rows = obj.Settings[0];
            grid_size_columns = obj.Settings[0];
}

function start() {

    readManifest(function(err, response) {
        if (!err) {
            fileType = response.file_type;
            if (response.file_type == "obf") {
                setupInternalDataStructuresObf(response.result);
                if (!errorMsg) {
                    setupMessageWindow();
                    setup_table_obf();
                    load_page_obf(key);
                    document.getElementById('toggle_scanning').style.display = 'block';
                } else {
                    document.getElementsByClassName('error')[0].innerHTML = errorMsg;
                    document.getElementsByClassName('error')[0].style.display = 'block';
                    document.getElementById('toggle_scanning').style.display = 'none';
                }                
            } else if (response.file_type == "ovf") {
                setupInternalDataStructures(response.result);
                setupMessageWindow();
                setup_table();
                load_page(key);                
            } else {
                console.log('Invalid file format.');
            }            
        } else {
            console.log("Problem reading file");
        }
    });

    //TODO - needs an error message if the JSON doesn't load
    main = document.getElementById("mainGrid");
    offset_t = $(main).offset().top
    offset_l = $(main).offset().left
    interval_access_var = 0

}

function setupMessageWindow() {
    var cellWidthInPixels = 720/grid_size_columns;
    var messageWindowWidthInCells = Math.ceil(grid_size_columns/2)
    my_width = cellWidthInPixels * messageWindowWidthInCells;
    my_height = 520 / grid_size_rows;
    area = document.getElementById('messagewindow');
    $(area).css('width', my_width);
    $(area).css('left', (720 / grid_size_columns) + 7);
    $(area).css('top', 97);
    $(area).css('height', my_height);
}

function setup_table_obf() {
    var table = document.getElementById("mainGrid");
    table.className = get_size_class();
    for (y = 0; y < grid_size_rows; y++) {
        var row = table.insertRow(0);
        for (x = 0; x < grid_size_columns; x++) {
            cell = row.insertCell(0);
            cell.style.textAlign = "center";
            cell.style.verticalAlign = "center";
        }
    }
}

function setup_table() {
    var table = document.getElementById("mainGrid");
    table.className = get_size_class();
    for (y = 0; y < grid_size_rows; y++) {
        var row = table.insertRow(0);
        for (x = 0; x < grid_size_rows; x++) {
            cell = row.insertCell(0);
            cell.style.textAlign = "center";
            cell.style.verticalAlign = "center";
        }
    }
}

function resetTable() {
    var table = document.getElementById("mainGrid");
    table.innerHTML = '';
}

function compute_cell(x, y) {
    return $('#mainGrid tr:eq(' + x + ') td:eq(' + y + ')');
}

function get_size_class() {
    return (grid_size_rows == 5 ? "five" : "four");
};

function get_toppage() {
    return

}

function load_page_obf(key_in) {
    key = key_in
    for (x = 0; x < grid_size_rows; x++) {
        for (y = 0; y < grid_size_columns; y++) {
            try {
                compute_cell(x, y).css('background-color', "rgb(" + colours[key][x][y] + ")")
                compute_cell(x, y).removeClass('note')
                /* if (links[key][x][y]) {
                    compute_cell(x, y).addClass('note')
                } */                
                if (icons[key][x][y] != "") {
                    //compute_cell(x, y).html("")
                    //console.log('icons[key][x][y]: ', icons[key][x][y]);
                    var image_html = "<IMG src=\"" + icons[key][x][y] + "\" class=\"" + get_size_class() + "\">";
                    compute_cell(x, y).addClass('addText');
                    compute_cell(x, y).html("<b>" + labels[key][x][y] + "</b><br>" + image_html);
                } else if (labels[key][x][y] != "") {
                    compute_cell(x, y).addClass('addText');
                    compute_cell(x, y).html("<b>" + labels[key][x][y] + "</b>");
                }
            } catch (err) {
                console.log("Error with key: " + key);
                alert("There has been an exception: " + err.message)
                //start()
            }
        }
    }
}

function load_page(key_in) {
    key = key_in
    for (x = 0; x < grid_size_rows; x++) {
        for (y = 0; y < grid_size_rows; y++) {
            try {
                var image_html = "<IMG src=\"" + icons[key][y][x] + "\" class=\"" + get_size_class() + "\">";
                compute_cell(x, y).css('background-color', "rgb(" + colours[key][y][x] + ")")
                compute_cell(x, y).removeClass('note')
                if (links[key][y][x]) {
                    compute_cell(x, y).addClass('note')
                }
                compute_cell(x, y).html("<b>" + labels[key][y][x] + "</b><br>" + image_html);
                if (icons[key][y][x] == "") {
                    compute_cell(x, y).html("")
                }
            } catch (err) {
                console.log("Error with key: " + key);
                alert("There has been an exception: " + err.message)
                //start()
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

function append(text) {
    if (text.length == 1) { //so that we can spell with the single letter buttons
        document.myform.outputtext.value += text;
    } else {
        //document.myform.outputtext.value += " " + text; (works, but NOT when testing... 
	document.getElementById("messagewindow").value+= " " +text;
    }
}

function add(i, j) {
    if (links[key][i][j] == "") {
        append(labels[key][i][j]);
    }

    if (links[key][i][j].includes("ovf(")) {
        processSpecial(links[key][i][j]);
    } else if (links[key][i][j].includes("special::")) {
        processSpecialOld(links[key][i][j]);

    } else if (links[key][i][j] != "") {
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
            case "1":
                key = "top_page";
                break;
            default:
                //alert(key+" "+i+" "+j)
                load_page(links[key][i][j]);
        }
    }
}

function addObfData(i, j) {
    if (links[key][i][j] == "") {
        switch (labels[key][i][j]) {
            //There are two special cases for links - clearing the message window, deleting the last word from the message window. Further special behaviours (volume change and the like) could be added here.
            case "Delete Word":
                let str = document.myform.outputtext.value;
                let lastIndex = str.lastIndexOf(" ");            
                document.myform.outputtext.value = str.substring(0, lastIndex);
                break;
            case "Clear Text":
                document.getElementById("messagewindow").value= "";
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
            default:
                //alert(key+" "+i+" "+j)
                append(labels[key][i][j]);
                break;
        }
    }

    if (links[key][i][j] != "") {
        readManifestRelationFile('boards/' + links[key][i][j], function(err, response){
            if (!err) {
                fileType = response.file_type;
                resetTable();
                setupInternalDataStructuresObf(response.result);
                setupMessageWindow();
                setup_table_obf();
                load_page_obf(key);

            } else {
                callback(true);
            }
        });
    }
        
    
}

function processSpecialOld(command) {
    var commandArray = command.split(';'); //there's going to be a problem with inserting a semicolon...
    for (i = 0; i < commandArray.length; i++) {
        switch (commandArray[i]) {
            case "special::clear":
               // document.myform.reset();Works, but NOT in tests...
		document.getElementById("messagewindow").value= "";
                break;
            case "special::unfinnished":
                alert("This feature is unimplemented on the web demo");
                break;
            case "special::deleteword":
                (function() {
                    var lastIndex = document.myform.outputtext.value.lastIndexOf(" ");
                    document.myform.outputtext.value = document.myform.outputtext.value.substring(0, lastIndex);
                })();
            default:
                parts = commandArray[i].split("%22")
                if (parts[0].includes("place")) {
                    append(parts[1].split("%20").join(" "));
                } else if (parts[0].includes("open")) {
                    key = parts[1]
                    load_page(key);

                }

                break;
        }
    }


}

function processSpecial(command) {
    console.log(command);
    //So right now the command should start with an ovf( and end with a ) and then we know what is in there. so 
    //	
    if (command.startsWith("ovf(")) {
        command = command.substring(4, command.length - 1)
    } else {
        console.log("Special Command doesn't start with 'ovf(', bugging out");
        return;
    }
    console.log("Command is now:" + command);
    //so far, all we've done is strip the 'command' from the front. But that's slightly the wrong order. 
    // What we want to do is execute the command each time
    // No, we want a javascript function for each command, that makes sense.

    var commandArray = command.split(',');
    for (i = 0; i < commandArray.length; i++) {
        functionname = commandArray[i].split('(')[0]
        console.log("Function Name is :" + functionname);
        switch (functionname) {
            case "clear":
                //document.myform.reset();Works but NOT in tests
		document.getElementById("messagewindow").value= "";

                break;
            case "backspace":
                document.myform.outputtext.value = document.myform.outputtext.value.substring(0, document.myform.outputtext.value.length - 1);
                break;
            case "unfinnished":
                alert("This feature is unimplemented on the web demo");
                break;
            case "deleteword":
                (function() {
                    var lastIndex = document.myform.outputtext.value.lastIndexOf(" ");
                    document.myform.outputtext.value = document.myform.outputtext.value.substring(0, lastIndex);
                })();
                break;
            case "place":
                arg = commandArray[i].split('(')[1];
                arg = arg.substring(0, arg.length - 1);
                arg = arg.replace(/\'/g, "")
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                arg = arg.replace(/\"/g, "")
                append(arg);
                break;
            case "open":
                console.log("Open gets this far")
                arg = commandArray[i].split('(')[1];
                console.log("Args was:" + arg)
                arg = arg.replace(/\'/g, "")
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                arg = decodeURIComponent(arg)
                //the next line is to match what the python does for internal grid names
                arg = arg.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(" ", "")
                console.log("Arg becomes:" + arg)
                load_page(arg);
                break;
            default:
                alert("Implementation error - an unrecognised OVF function was called");
                break;
        }
    }


}

//calls the Google api from the text given. This part requires an internet connection unless you can retarget to a local system (on a mac, for example, one can make a call to the command line utility 'say').
function makeWav() {
    var utterance = new SpeechSynthesisUtterance(document.myform.outputtext.value);
    var voicename = getParameterByName("lang")
    utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
        return voice.name == voicename;
    })[0];
    if (utterance.voice == null) {
        utterance.voice = speechSynthesis.getVoices().filter(function(voice) {
            return voice.name == "Daniel";
        })[0];
    }
    window.speechSynthesis.speak(utterance);
}

function getParameterByName(name, url) {
    //from http://stackoverflow.com/a/901144/170243
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
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
document.body.onkeydown = function(e) {
    trigger_on_scan()
};

$('#mainGrid').click(function(e) {
    if (azulejoe_scanning == true) {
        trigger_on_scan();
    } else {
        rows = grid_size_rows;
        colums = grid_size_columns;
        offset_l = $(this).offset().left - $(window).scrollLeft();
        offset_t = $(this).offset().top - $(window).scrollTop();       
        distance_down_in_table = e.clientY - offset_t
        percentage_down = (Math.round((e.clientY - offset_t)) / 540)
        
        var left = Math.floor(Math.round((e.clientX - offset_l)) / this.width * colums);
        var our_top = Math.floor(Math.round((e.clientY - offset_t)) / 540 * rows);

        if (our_top < grid_size_columns) {
            if (left < grid_size_columns) {
                if (fileType == 'obf') {
                    addObfData(our_top, left);
                } else {
                    add(left, our_top)
                }
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


// Construct a Button object
function Button(id, label, imageId, soundId, color, external_board) {
    this.id = id;
    this.label = label;
    this.imageId = imageId;
    this.soundId = soundId;
    this.color = color;
    this.external_board = external_board;
}

function grid_Setter(grid) {
    this.gridSize = grid;
}

function images_Setter(imageArray) {
    this.images = imageArray;
}

function sound_Getter(soundPage) {
    this.soundGrid = soundPage;
}

//Construct an Image object, an id, url pair
function Image(imageId, url) {
    this.imageId = imageId;
    this.url = url;
}

//Construct a label object, an id, name pair
function Label(id, name) {
    this.key = id;
    this.name = name;
}

function Sound(id, sound) {
    this.key = id;
    this.url = sound;
}

function rgbObject2Array(rgbColorObject) {
    let rgb = "";
    if(rgbColorObject) {
        if(rgbColorObject.startsWith("rgba")) { //Valid colour object
            let rgba = rgbColorObject.replace(/[^\d,.]/g, '').split(',');
            rgb = rgba.splice(0,3); //We only want rgb, so loose the a
        } else if(rgbColorObject.startsWith("rgb")) {
            rgb = rgbColorObject.replace(/[^\d,]/g, '').split(','); //
        } 
    }

    if (rgb[0] > 255) {
        throw "Invalid color property.";
    }
    if (rgb[1] > 255) {
        throw "Invalid color property.";
    }
    if (rgb[2] > 255) {
        throw "Invalid color property.";
    }
    
    return rgb;
}

// Read Manifest file
function readManifest(callback)
{
    var req = new XMLHttpRequest();
    req.open("GET", 'data/manifest.json');
    //req.overrideMimeType("application/json");
    req.send(null);
    req.onreadystatechange = function() {
        
        if (req.readyState == 4 && req.status == 200) {
           
            var parseData = JSON.parse(req.responseText);
            
            readManifestRelationFile(parseData.root, function(err, result){
                if (!err) {
                    callback (false, result);
                } else {
                    callback(true);
                }
            })

        } else {
            console.log("Problem reading file");
        }
    };
}

function readManifestRelationFile(file, callback)
{
    var s = file;
    var splitString = s.split(".");
    var fileType = splitString[splitString.length-1];

    var req = new XMLHttpRequest();
    req.open("GET", 'data/' + file);
    //req.overrideMimeType("application/json");
    req.send(null);
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if (req.status == 200) {
                callback(false, {"file_type": fileType, "result": req.responseText});
            } else {
                console.log("Problem reading file");
                callback(true);
            }
        }
    };
}
