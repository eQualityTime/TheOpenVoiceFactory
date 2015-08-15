import QtQuick 2.0

import "qrc:/JsLoader.js" as JsLoader
import com.azulejoe 1.0 // for c++ types registered in main.cpp

Item {

    id: topItem

    property var utterances;
    property var links;
    property alias imageSource : main.src;

    // This is a bit of a hack: The JS pagesets hardcode
    // "document.main.src" as the destination for the background
    // image. We mimic that here so that it still works.
    Item {
        id: document
        anchors.fill: parent

        // Without this alias, JS gives a TypeError.
        property alias main: main
        Item {
            id: main
            property string src;
        }
    }

    function new2dArray(size)
    {
        var temp = new Array(size);
        for (var i = 0; i < size; i++) {
            temp[i] = new Array(size);
        }
        return temp;
    }

    function reset() {
        var i,j;
        for(j=0;j<5;j++)
        {
            for(i=0;i<5;i++)
            {
                utterances[i][j]="";
                links[i][j]="";
            }
        }
        links[3][0]="speak";
    }

    function loadFileFromJs(inputFile, inputFunction) {
        var success = JsLoader.loadResource(inputFile);
        if (success) {
            utterances = new2dArray(5);
            links = new2dArray(5);

            // TODO: Don't use the evil eval.
            eval("JsLoader." + inputFunction + "()");


            console.log("main.src:");
            console.log(main.src);
            for (var i=0; i < 5; i++) {
                for (var j=0; j < 5; j++) {
                    model.append({ link: links[j][i],
                                     utterance: utterances[j][i] })
                }
            }
        }
        return success;
    }

    // Return a string comprised of n spaces.
    function spaces(n) {
        var s = "";
        for (var i=0; i < n; i++) {
            s+=" ";
        }
        return s;
    }

    // For a JSON object, print to the console all the
    // entries. Nested objects get indented according to
    // level.
    function logJsonRecursive(obj, level) {
        if (typeof level === 'undefined') {
            level = 0;
        }
        for (var prop in obj) {
            var val = obj[prop];
            console.log(spaces(level*2) + "Key:" + prop);
            console.log(spaces(level*2) + "Value:" + val);
            if (typeof val === 'object') {
                logJsonRecursive(val, level+1);
            }
        }
    }

    function toHex( decString ) {
      return  ("0"+(Number(decString).toString(16))).slice(-2).toUpperCase()
    }

    // Convert from OBF RGB: rgb(x, y, z) (in dec)
    // to QML RGB: #RRGGBB (in hex)
    function parseObfRgb( obfString ) {
        if (typeof obfString === 'undefined') {
            return "#000000"
        }

        // Strip out all whitespace
        obfString = obfString.replace(/ /g,'');

        // Extract numbers
        var regExp = /rgb\((\d*),(\d*),(\d*)\)/i
        var match = regExp.exec(obfString);

        if (match == null || match.length < 4) {
            console.log("Cannot parse colour "+obfString)
            return "#000000"
        }

        // Extract colors, in hex
        var r = toHex(match[1]);
        var g = toHex(match[2]);
        var b = toHex(match[3]);

        if (match[1] > 255 || match[2] > 255 || match[3] > 255 ||
            match[1] < 0 || match[2] < 0 || match[3] < 0) {
            console.log("Cannot parse colour "+obfString)
            return "#000000"
        }

        // Create new string
        var qmlString = "#" + r + g + b
        return qmlString
    }


    FileUtils {
        id:fileUtils
    }

    // manifestFile = full url to manifest which describes the whole file
    // page = page name, or empty string for root page.
    function loadFileFromObf(topDir, page) {

        // Read manifest file for mappings/default page
        var manifestFile = fileUtils.fullFile(topDir, "manifest.json");
        if (!fileUtils.exists(manifestFile)) {
            console.log("Cannot find file " + manifestFile);
            return false;
        }

        var fileContent = fileUtils.read(manifestFile);
        var manifestObj = JSON.parse(fileContent);
        var image_paths = manifestObj["paths"]["images"];
        var board_paths = manifestObj["paths"]["boards"];

        // Default to root page if none requested
        if (page === "") {
            page = manifestObj["root"];
        }

        // Read requested page
        var pageFile = fileUtils.fullFile(topDir, page);

        if (!fileUtils.exists(pageFile)) {
            console.log("Cannot find file " + pageFile);
            return false;
        }

        fileContent = fileUtils.read(pageFile);
        var obj = JSON.parse(fileContent);

        // Read all the fields we care about
        for (var prop in obj) {
            if (prop === "buttons") {
                var allButtons = obj[prop];
                // TODO: We assume buttons come in order,
                // but they might not.
                for (var button in allButtons) {
                    var label = allButtons[button]["label"]
                    var link = ""
                    var utterance = ""
                    var loadBoard = allButtons[button]["load_board"]
                    if (loadBoard !== undefined) {
                        link = loadBoard["path"]
                    }
                    else {
                        utterance = label
                    }
                    var bg_color = allButtons[button]["background_color"]
                    bg_color = parseObfRgb(bg_color)

                    var border_color = allButtons[button]["border_color"]
                    border_color = parseObfRgb(border_color)

                    var image_id = allButtons[button]["image_id"]
                    var image_path = ""
                    if (typeof image_id !== "undefined") {
                        var image_path = "file:/" + fileUtils.fullFile(topDir, image_paths[image_id]);
                    }
                    model.append({ link: link,
                                   label: label,
                                   utterance: utterance,
                                   image_path: image_path,
                                   bg_color: bg_color,
                                   border_color: border_color
                                 });
                }
            }
        }
        return true;
    }

    // Contents of the model that gets filled in by loading
    // a file.
    property ListModel listModel: ListModel {
        id: model
    }


}

