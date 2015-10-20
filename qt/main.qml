
import QtQuick 2.2
import QtQuick.Controls 1.2
import QtQuick.Dialogs 1.2
import QtQuick.Controls.Styles 1.2

import "layouts"

// The top level window just manages a Stackview.
// For now we'll probably never have more than two items on the stack, but it
// keeps our navigation options open to future changes.
ApplicationWindow {
    id: app
    visible: true
    width: 1200
    height: 700
    color: "white"

    property alias text: stagedText.text

    // Main stackview, responsible for loading pages.
    StackView {
        id: stackView
        anchors.fill: parent

        // Implements back key navigation
        focus: true
        Keys.onReleased: if (event.key === Qt.Key_Back && stackView.depth > 1) {
                             stackView.pop();
                             event.accepted = true;
                         }

//        initialItem:  PageLayoutObf {
//           // pageset: "/Users/kirsty/Documents/AzuleJoe/commukate_pageset/communikate-20/"
//            pageset: "/Users/kirsty/Documents/AzuleJoe/CK_OBF_new/"
//        }
//        initialItem:  TempConversionObf {
//            pageset: "/Users/kirsty/Documents/AzuleJoe/commukate_pageset/communikate-20/"
//        }
        initialItem:  PageLayoutJs {
            page: "page1"
        }

        delegate: StackViewDelegate {
            function transitionFinished(properties)
            {
                properties.exitItem.opacity = 1
            }

            property Component pushTransition: StackViewTransition {
                PropertyAnimation {
                    target: enterItem
                    property: "opacity"
                    from: 0
                    to: 1
                }
                PropertyAnimation {
                    target: exitItem
                    property: "opacity"
                    from: 1
                    to: 0
                }
            }
        }
    }

    // This text view sits on top of the stack of pagesets, to manage the pending
    // utterances.
    StagingArea {
        id: stagedText
    }

    // Set the position of the staging area. This may depend on
    // type of page set and number of tiles.
    function setStagingArea(x, y,
                            width, height) {
        stagedText.x = x;
        stagedText.y = y;
        stagedText.width = width;
        stagedText.height = height;
    }

    ErrorPage {
      id: ttsErrorDialog
      z: 200 // TODO: relative z!
      visible: false
      text: qsTr("Error occurred while trying to speak.") + "\n" +
            qsTr("Please check your tablet's Text-to-Speech settings.");
      onBack: {
        ttsErrorDialog.visible = false;
      }
    }

    Component.onCompleted: {
        TTSClient.ttsError.connect(onTtsError);
    }

    SwipeDownMenu {
    }

    // Pass through methods for the staging area.
    function onTtsError() {
        ttsErrorDialog.visible = true;
    }

    function appendWord(word) {
        stagedText.appendWord(word);
    }

    function appendLetter(letter) {
        stagedText.appendLetter(letter);
    }

    function backspace() {
        stagedText.backspace();
    }

    function resetText() {
        stagedText.resetText();
    }

    function deleteWord() {
        stagedText.deleteWord();
    }

    function hidePendingUtterances() {
        stagedText.visible = false
    }

    function showPendingUtterances() {
        stagedText.visible = true
    }
}
