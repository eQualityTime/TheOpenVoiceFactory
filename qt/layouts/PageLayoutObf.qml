import QtQuick 2.0
import QtQuick.Controls 1.2
import QtQuick.Layouts 1.1
import QtGraphicalEffects 1.0

import ".."

Rectangle {
    //anchors.fill: parent

    id: pageLayout

    color: "black"

    // top level OBF folder, defines whole set of pages
    property string pageset: ""

    // Individual page to load
    property string page: ""

    // This object is responsible for loading the chosen pageset. The
    // resulting data will be stored in pageLoader.model
    PageData {
        id: pageLoader
        Component.onCompleted: {
            var output = pageLoader.loadFileFromObf(pageLayout.pageset,
                                                     pageLayout.page);
            if (output === null) {
                app.hidePendingUtterances();
                error.visible = "true"
                return;
            }
            else {
                nRows = output.rows;
                nCols = output.cols;
                app.showPendingUtterances();
            }
        }
    }

    // Get set by page-reading
    property int nCols: 0
    property int nRows: 0

    property int itemWidth: width / nCols
    property int itemHeight: height / (nRows+1)

    // Padding around each button and between button edges
    // and contents
    property int padding: 2
    property int borderWidth: 3

    // The control bar.
    // Needs to hold a minimum # of items, even if it means not matching the grid of the
    // pageset.
    property int minControlItems: 4
    property int controlBarItemWidth : (nCols > minControlItems) ? itemWidth : pageLayout.width/minControlItems
    // Staging area stretches to fill any extra space.
    property int stageWidth : {
        return (nCols > minControlItems) ? nCols - (minControlItems -1 ): 1;
    }

    Row {
        id: controlBar

        width: parent.width
        height: itemHeight
        x: pageLayout.padding
        y: pageLayout.padding
        spacing: pageLayout.padding*2
        z: 1000

        // UI for staging area, which is defined up a level in main.qml.
        // We can't do the actual staging here, since it needs to be accessible from multiple pages.
        // We just provide a white background for the text.
        Rectangle {
            width: stageWidth * controlBarItemWidth - pageLayout.padding*2
            height: itemHeight - pageLayout.padding*2
            color: "white"
            radius: width*0.02
            border.color: "black"
            border.width: borderWidth

            // Whenever the size of this changes, make sure text area at top
            // level changes too!
            onWidthChanged: {
                app.setStagingArea(x, y, width, height);
            }
            onHeightChanged: {
                app.setStagingArea(x, y, width, height);
            }
        }

        // Backspace button
        IconButton {
            width: controlBarItemWidth - pageLayout.padding*2
            height: itemHeight - pageLayout.padding*2
            color: "#CCFFCC"
            border.color: "black"
            border.width: borderWidth
            imageScale: 0.65
            source: "qrc:/icons/Delete.png"
            text: "Delete word"
            font.pixelSize: parent.height/6
            onClicked: processClick("", "deleteword");
        }

        // Clear button
        IconButton {
            width: controlBarItemWidth - pageLayout.padding*2
            height: itemHeight - pageLayout.padding*2
            text: "Clear"
            radius: width*0.02
            color: "#CCFFCC"
            border.color: "black"
            border.width: borderWidth
            font.pixelSize: parent.height/3
            onClicked: processClick("", "clear");
        }

        // Speak button
        IconButton {
            width: controlBarItemWidth - pageLayout.padding*2
            height: itemHeight - pageLayout.padding*2
            color: "#CCFFCC"
            border.color: "black"
            border.width: borderWidth
            source: "qrc:/icons/Speak.png"
            imageScale: 0.95
            onClicked: processClick("", "speak");
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

        // Each delegate has access to one item in the list model, with
        // properties like "link", "utterance", "bg_color" and so on.
        delegate: Item {
            width: gridView.cellWidth
            height: gridView.cellHeight

            property bool isFolder: link && (link.length > 0)

            // This is the individual 'button'. It contains an image
            // and a label, and a mouse area to receive clicks.
            IconButton {
                id: button
                width: gridView.cellWidth - pageLayout.padding*2
                height: gridView.cellHeight - pageLayout.padding*2
                anchors.horizontalCenter: parent.horizontalCenter
                anchors.verticalCenter: parent.verticalCenter
                color: isFolder ? "transparent" : bg_color
                border.width: isFolder ? 0 : borderWidth
                border.color: border_color
                source: image_path
                text: label
                onClicked: {
                    processClick(utterance, link);
                }

                // If the folder is a link, then we use colorized backgrounds
                // image instead of the main rectangle to create a "folder" icon
                // of the correct color.
                Image {
                    z: button.z - 2
                    visible: isFolder
                    anchors.fill: parent
                    source: "qrc:/icons/Folder.png"
                    smooth: true

                    ColorOverlay {
                        anchors.fill: parent
                        source: parent
                        color: bg_color
                    }
                }
                Image {
                    visible: isFolder
                    anchors.fill: parent
                    source: "qrc:/icons/FolderBorder.png"
                    smooth: true
                    z: button.z - 1

                    ColorOverlay {
                        anchors.fill: parent
                        source: parent
                        color: border_color
                    }
                }
            }
        }
        model: pageLoader.listModel
    }

    // Full-screen message for page navigation errors
    ErrorPage {
        id: error
        z: 1000 // TODO: relative z!
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
        if (utterance !== undefined && utterance.length > 0) {
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

        if (link !== undefined && link.trim().length > 0) {
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
                stackView.push({ item: "qrc:/layouts/PageLayoutObf.qml",
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


