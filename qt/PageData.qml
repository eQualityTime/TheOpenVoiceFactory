import QtQuick 2.0

import "qrc:/JsLoader.js" as JsLoader

Item {

    id: topItem

    property var utterances;
    property var links;
    property alias imageSource : main.src;

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
        console.log("new2dArray")
        var temp = new Array(size);
        for (var i = 0; i < size; i++) {
            temp[i] = new Array(size);
        }
        return temp;
    }

    function reset() {
        console.log("reset")
        console.log("utterances= " + utterances)

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

    function loadFile(inputFile, inputFunction) {
        var success = JsLoader.loadResource(inputFile);
        if (success) {
            utterances = new2dArray(5);
            links = new2dArray(5);

            // TODO: Don't use the evil eval.
            eval("JsLoader." + inputFunction + "()");

            console.log("utterances= " + utterances)
            console.log("links = " + links)

            for (var i=0; i < 5; i++) {
                for (var j=0; j < 5; j++) {
                    model.append({ link: links[j][i],
                                     utterance: utterances[j][i] })
                }
            }
        }
        return success;
    }

    // Create a pageset model from JS file.
    property ListModel listModel: ListModel {
        id: model
    }

}

