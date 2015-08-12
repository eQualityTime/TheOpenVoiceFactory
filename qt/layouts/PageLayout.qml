import QtQuick 2.0
import QtQuick.Controls 1.2
import QtQuick.Layouts 1.1

import ".."

Item {
    //anchors.fill: parent

    id: pageLayout

    // The page name, e.g. "food".
    // Must correspond to the function called to populate the
    // data, e.g. food().
    property string pagesetType: "OBF"
    property string pageset: "" // top level, defines whole set
    property string page: ""    // individual page

    // This object is responsible for loading the chosen pageset.
    PageData {
        id: pageLoader
        Component.onCompleted: {
            var success = pageLoader.loadFileFromObf(pageLayout.pageset,
                                                     pageLayout.page);
            if (!success) {
                app.hidePendingUtterances();
                error.visible = "true"
                return;
            }
            else {
                app.showPendingUtterances();
                //gridView.model = pageLoader.listModel;
            }
        }
    }

    // Hardcoded to 5x5 grid.
    // TODO: Read grid structure from OBF
    property int itemWidth: width / 5
    property int itemHeight: height / 5

    // Padding around each button and between button edges
    // and contents
    property int padding: 2
    property int borderWidth: 2

    // The control bar
    Row {
        id: controlBar
        width: parent.width
        height: itemHeight
        x: padding
        y: padding
        spacing: padding*2
        z: 1000

        // UI for staging area, which is defined up a level in main.qml.
        // We can't do the actual staging here, since it needs to be accessible from multiple pages.
        Rectangle {
            width: itemWidth*2 - padding*2
            height: itemHeight - padding*2
            color: "white"
            radius: width*0.02
            border.color: "black"
            border.width: borderWidth
        }

        // Backspace button
        Rectangle {
            width: itemWidth - padding*2
            height: itemHeight - padding*2
            color: "#CCFFCC"
            radius: width*0.02
            border.color: "black"
            border.width: borderWidth
            opacity: mouseAreaDelete.pressedButtons ? 0.7 : 1

            Rectangle {
                id: imageRect
                height: parent.height * 0.75
                width: parent.width * 0.75
                color: "transparent"
                anchors.horizontalCenter: parent.horizontalCenter
                Image {
                    anchors.fill: parent
                    source: "qrc:/icons/Delete.png"
                    fillMode: Image.PreserveAspectFit
                    anchors.centerIn: parent
                }
            }
            Label {
                anchors.top: imageRect.bottom
                text: "Delete word"
                color: "black"
                font.pixelSize: parent.height/6
                anchors.horizontalCenter: parent.horizontalCenter
            }
            MouseArea {
                id: mouseAreaDelete
                anchors.fill: parent
                onClicked: processClick("", "deleteword");
            }
        }

        // Clear button
        Rectangle {
            width: itemWidth - padding*2
            height: itemHeight - padding*2
            color: "#CCFFCC"
            radius: width*0.02
            border.color: "black"
            border.width: borderWidth
            opacity: mouseAreaClear.pressedButtons ? 0.7 : 1
            Label {
                text: "Clear"
                color: "black"
                font.pixelSize: parent.height/2
                anchors.centerIn: parent
            }
            MouseArea {
                id: mouseAreaClear
                anchors.fill: parent
                onClicked: processClick("", "clear");
            }
        }

        // Speak button
        Rectangle {
            width: itemWidth - padding*2
            height: itemHeight - padding*2
            color: "#CCFFCC"
            radius: width*0.02
            border.color: "black"
            border.width: borderWidth
            opacity: mouseAreaSpeak.pressedButtons ? 0.7 : 1
            Image {
                anchors.fill: parent
                anchors.margins: parent.width *0.02
                source: "qrc:/icons/Speak.png"
                fillMode: Image.PreserveAspectFit
                anchors.centerIn: parent
            }
            MouseArea {
                id: mouseAreaSpeak
                anchors.fill: parent
                onClicked: processClick("", "speak");
            }
        }
    }

    // The grid of buttons
    GridView {
        id: gridView
        z: 1

        anchors.top: controlBar.bottom
        anchors.bottom: parent.bottom
        anchors.left: parent.left
        anchors.right: parent.right

        cellWidth: itemWidth
        cellHeight: itemHeight

        delegate: Item {
            width: gridView.cellWidth
            height: gridView.cellHeight

            // This is the individual 'button'. It contains an image
            // and a label, and a mouse area to receive clicks.
            Rectangle {
                id: individualButton
                width: gridView.cellWidth - padding*2
                height: gridView.cellHeight - padding*2
                anchors.horizontalCenter: parent.horizontalCenter
                anchors.verticalCenter: parent.verticalCenter
                color: bg_color
                opacity: mouseArea.pressedButtons ? 0.7 : 1
                border.width: borderWidth
                border.color: border_color
                radius: width*0.02

                Column {
                    spacing: padding
                    anchors.fill: parent
                    anchors.margins: padding + borderWidth
                    Image {
                        height: individualButton.height*0.8
                        width: individualButton.width*0.8
                        anchors.horizontalCenter: parent.horizontalCenter
                        source: image_path
                        fillMode: Image.PreserveAspectFit
                    }
                    Label {
                        text: label
                        anchors.horizontalCenter: parent.horizontalCenter
                        font.pixelSize: parent.height/10
                    }
                }

                MouseArea {
                    id: mouseArea
                    anchors.fill: parent
                    onClicked: {
                        processClick(utterance, link);
                     }
                }
            }
        }
        model: pageLoader.listModel
    }

    // Message for page navigation errors
    Rectangle {
        id: error
        z: 200
        anchors.fill: parent
        color: "white"
        visible: false

        Text {
            id: msg
            anchors.horizontalCenter: parent.horizontalCenter
            y: backButton.y - height
            text: "Page not found"
            width: paintedWidth
            height: paintedHeight
            color: "black"
            font.pixelSize: parent.height/20
        }

        Button {
            anchors.horizontalCenter: parent.horizontalCenter
            y: parent.height/2
            id: backButton
            text: "Back"
            onClicked: {
                app.showPendingUtterances();
                stackView.pop();
            }
        }
    }

    function processClick(utterance, link) {
        console.log(utterance);
        console.log(link);
        if (utterance.length > 0) {
            // If we've got a single letter, we're spelling a word
            // and don't want to add a space
            // Single-letter words such as "a" or "I" will be padded
            // to ensure they are identified as words, not letters.
            // We'll remove the padding with trim().
            if (utterance.length === 1) {
                app.appendLetter(qsTr(utterance))
            }
            else {
                app.appendWord(qsTr(utterance.trim()))
            }
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
                app.backspace();
                break;
            case "speak":
                TTSClient.speak(app.text);
                break;
            case "1":
                stackView.pop();
                break;
            case "google":
                googlesearch();
                break;
            case "youtube":
                youtubesearch();
                break;
            case "twitter":
                tweet();break;
            default:
                stackView.push({ item: "qrc:/layouts/PageLayout.qml",
                                 replace: stackView.depth > 1 ,
                                 properties: {
                                       pageset: pageLayout.pageset,
                                       page: cmd } });
            }
        }
    }

    function googlesearch() {
        var words = app.getWords();
        var url = "http://www.google.co.uk/images?q="
                + words.join("+");
        Qt.openUrlExternally(url);

    }
    function youtubesearch() {
        var words = app.getWords();
        var url = "http://www.youtube.com/results?search_query="
                + words.join("+") +"&search_type=&aq=0";
        Qt.openUrlExternally(url);
    }
    function tweet() {
        var words = app.getWords();
        var twtTitle=words.join(" ");
        var maxLength = 140;
        if(twtTitle.length > maxLength)
        {
            twtTitle = twtTitle.substr(0, (maxLength -3))+'...';
        }
        var url ='http://twitter.com/home?status='+twtTitle.replace(" ", "%20");
        Qt.openUrlExternally(url);
    }

}


