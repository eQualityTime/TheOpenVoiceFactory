import QtQuick 2.0
import QtQuick.Controls 1.2
import QtQuick.Layouts 1.1
import QtGraphicalEffects 1.0

import ".."

Rectangle {
    anchors.fill: parent

    id: pageLayout

    color: "ghostwhite"

    // The page name, e.g. "food".
    // Must correspond to the function called to populate the
    // data, e.g. food().
    property string page: ""    // individual page

    // This object is responsible for loading the chosen pageset.
    PageData {
        id: pageLoader
        Component.onCompleted: {
            var success = pageLoader.loadFileFromJs(
                                    "qrc:/" + page + ".js",
                                    page);
            if (!success) {
                app.hidePendingUtterances();
                error.visible = "true"
                return;
            }
            else {
                app.showPendingUtterances();
            }
        }
    }

    // Background image for this page
    Image {
        anchors.fill: parent
        z: 0
        source: "../" + pageLoader.imageSource
    }

    // UI for staging area, which is defined up a level in main.qml.
    // We can't do the actual staging here, since it needs to be accessible from multiple pages.
    // We just provide a white background for the text.
    property int padding: 2
    Rectangle {
        id: stage
        // This is very specific to the original JS pagesets!
        x: parent.width*0.212
        y: parent.height*0.0165
        width: parent.width*0.38
        height: parent.height*0.182

        color: "white"
        radius: width*0.01

        // Whenever the size of this changes, make sure text area at top
        // level changes too!
        onWidthChanged: {
            app.setStagingArea(x, y, width, height);
        }
        onHeightChanged: {
            app.setStagingArea(x, y, width, height);
        }
    }


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
                onClicked: processClick(utterance, link);
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
        model: pageLoader.listModel
    }

    // Full-screen message for page navigation errors
    ErrorPage {
        id: error
        z: 200 // TODO: relative z!
        visible: false
        text: "Page not found"
        onBack: {
            app.showPendingUtterances();
            stackView.pop();
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
                stackView.push({ item: "qrc:/layouts/PageLayoutJs.qml",
                                 replace: stackView.depth > 1 ,
                                 properties: { page: cmd } });
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


