import QtQuick 2.0

import "qrc:/JsLoader.js" as JsLoader

Item {
    //anchors.fill: parent

    // The page name, e.g. "food".
    // Must correspond to the function called to populate the
    // data, e.g. food().
    property string page: ""

    Item {
        id: document
        anchors.fill: parent

        // Without this alias, JS gives a TypeError.
        property alias main: main
        Image {
            id: main

            // This alias is to match the web conventions.
            property alias src: main.source

            anchors.fill: parent
            z:0
        }
    }

    // These need to have file-level scope so our external script can
    // write to them.
    property variant utterances: {}
    property variant links: {}

    // The gridview of mouseareas
    GridView {
        id: gridView
        z: 1

        anchors.fill: parent

        // 5x5 grid.
        // We'll add appropriate margins inside delegate
        cellWidth: width / 5
        cellHeight: height / 5

        delegate: Item {
            width: gridView.cellWidth
            height: gridView.cellHeight
            MouseArea {
                id: mouseArea
                width: gridView.cellWidth*0.95
                height: gridView.cellHeight*0.95
                anchors.horizontalCenter: parent.horizontalCenter
                anchors.verticalCenter: parent.verticalCenter
                onClicked: {
                    if (utterance.trim().length > 0) {
                        app.appendWord(" " + qsTr(utterance))
                    }

                    if (link.trim().length > 0) {
                        var cmd = link.trim();
                        switch (cmd) {
                        case "clear":
                            app.resetText();
                            break;
                        case "deleteword":
                            app.deleteWord();
                            break;
                        case "Backspace":
                            app.deleteWord();
                            break;
                        case "speak":
                            TTSClient.speak(app.text);
                            break;
                        case "1":
                            stackView.pop();
                            break;
                        default:
                            stackView.push({ item: "qrc:/layouts/PageLayout.qml",
                                             replace: stackView.depth > 1 ,
                                             properties: { page: cmd } });
                        }
                    }                    
                 }
            }
            Rectangle {
                width: gridView.cellWidth*0.9
                height: gridView.cellHeight*0.9
                anchors.horizontalCenter: parent.horizontalCenter
                anchors.verticalCenter: parent.verticalCenter

                color: "grey"
                opacity: 0.2
                visible: mouseArea.pressedButtons
            }
        }

        model: pageSet
    }


    // Create a pageset model from JS file.
    ListModel {
        id: pageSet

        Component.onCompleted: {
            JsLoader.loadResource("qrc:/" + page + ".js")

            utterances = new2dArray(5);
            links = new2dArray(5);

            // TODO: Don't use the evil eval.
            eval("JsLoader." + page + "()");

            for (var i=0; i < 5; i++) {
                for (var j=0; j < 5; j++) {
                    pageSet.append({ link: links[j][i],
                                       utterance: utterances[j][i] })
                }
            }
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
        var i,j
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

}


