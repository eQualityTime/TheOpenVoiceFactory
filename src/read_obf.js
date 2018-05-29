// read_obf reads data from an obf json file into the ovf internal data structure
// responseText contains the loaded json input
function setupInternalDataStructuresObf(responseText) {    
    key = "impinge";
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
    
    let obfInput = JSON.parse(responseText);    
    if(obfInput.format === "open-board-0.1") { //We are reading a valid obf file
 
        //Get the grid size
        let numberOfCells = obfInput.grid.order.length;
        rows = obfInput.grid.rows; //Total number of rowsr
        columns = obfInput.grid.columns; //Total number of columns

		boardname = obfInput.name;

        /* if(obfInput.name){
            
        } else {
            throw "No page name defined"
        } */
            
        
        //Load the grid array
        for (row=0; row<rows; row++) {
            for (column=0; column<columns; column++) {
                gridRow.push(obfInput.grid.order[row][column]);
            }
            grid.push(gridRow); //Copy the whole row into the grid
            gridRow = []; //Clears the array (actually creates a new array)
        }
        
        //Load images from obf into the local array
        /* var imageCount = obfInput.images.length;
        for (i=0;i<imageCount; i++) { 
            let image = obfInput.images[i];
            if(image.url) {
                imageArray.push(new Image(image.id, image.url));
            } else {
                imageArray.push(new Image(image.id, ""));
            }
        } */
        
        
        //Load Buttons into the local array
        for (i=0; i<obfInput.buttons.length; i++) {
            let button = obfInput.buttons[i];
            buttonGrid.push(new Button(button.id, button.label, button.image_id, button.sound_id, button.background_color));
        }
            
        //Load sounds into the local array
        /* for (i=0; i<obfInput.sounds.length; i++) {
            let sound = obfInput.sounds[i];
            soundsArray.push(new Sound(sound.id, sound.url));
        } */
        
        //Now construct the ovf array style
        for(row=0; row<rows; row++)  {
            for(column=0; column<columns; column++) {
                //We need to find the button id at this position in the grid to get the corresponding element ids and 
                //add them to the labels/Icons/Utterances arrays, a row at a time
                if(!grid[row][column]) { //This position is null
                    labelRow.push("");
                    iconRow.push("");
                    soundRow.push("");
                    colorRow.push("");
                } else {
                    thisLabel = buttonGrid.find(x => x.id === grid[row][column]);
                    labelRow.push(thisLabel.label);
                    colorRow.push(rgbObject2Array(thisLabel.color));
                    
                    if(thisLabel.imageId) {
                        let iconId = imageArray.find(x => x.imageId === thisLabel.imageId);
                        iconRow.push(iconId.url);
                    } else {
                        iconRow.push(""); //There is no image associated with this button
                    }
                    
                    if(thisLabel.soundId) {
                        let soundId = soundsArray.find(x => x.key === thisLabel.soundId);
                        soundRow.push(soundId.url)
                    } else {
                        soundRow.push(""); //No sound associated with this button
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
        }
    labels.addPage(boardname, labelPage);
    icons.addPage(boardname, iconPage);
    utterances.addPage(boardname, soundPage);
    colours.addPage(boardname, colorPage);
    key = boardname;
    
    grid_size_rows = row;
    grid_size_columns = columns; //Global variables for rows and columns

    }	
    console.log("Finished reading");
}

// Construct a Button object
function Button(id, label, imageId, soundId, color) {
    this.id = id;
    this.label = label;
    this.imageId = imageId;
    this.soundId = soundId;
    this.color = color;
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

function getKey() {    
    return this.boardname;
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
    return rgb;
}
