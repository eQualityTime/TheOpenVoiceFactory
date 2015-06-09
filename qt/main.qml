
import  QtQuick 2.2
import  QtQuick.Controls 1.2

import "layouts"

// The top level window just manages a Stackview.
// For now we'll probably never have more than two items on the stack, but it
// keeps our navigation options open to future changes.
ApplicationWindow {
    id: app
    visible: true
    width: 1200
    height: 700

    // Queue of words and/or letters that are staged
    // Each item looks like:
    // { content: 'text', isWord: true}
    // { content: 'e', isWord: false}
    property variant queue: ({})

    function appendWord(word) {
        queue.push({ content: word,
                     isWord: true});
        stagedText.updateText();
    }

    function appendLetter(letter) {
        queue.push({ content: letter,
                     isWord: false});
        stagedText.updateText();
    }

    function backspace() {
        queue.splice(queue.length-1,1);
        stagedText.updateText();
    }

    function resetText() {
        queue = [];
        stagedText.updateText();
    }

    function deleteWord() {
        var deletingLetters = false;
        for (var i = queue.length-1; i >= 0; i--) {
            var item = queue[i];
            if (item.isWord === true) {
                if (deletingLetters) {
                    break;
                }
                else {
                    queue.splice(i,1);
                    break;
                }
            }
            else { // isWord = false
                deletingLetters = true;
                // We'll keep deleting until we see a word.
                queue.splice(i,1);
            }
        }
        stagedText.updateText();
    }

    function hidePendingUtterances() {
        stagedText.visible = false
    }

    function showPendingUtterances() {
        stagedText.visible = true
    }

    StackView {
        id: stackView
        anchors.fill: parent

        // Implements back key navigation
        focus: true
        Keys.onReleased: if (event.key === Qt.Key_Back && stackView.depth > 1) {
                             stackView.pop();
                             event.accepted = true;
                         }

        initialItem:  PageLayout { page: "page1" }

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
    Rectangle {
        id:rect
        property int tileX: (parent.width/5)
        property int tileY: (parent.height/5)
        property int bufferX: (parent.width/80)
        property int bufferY: (parent.height/40)

        x: tileX+bufferX
        y: bufferY
        width: 2*tileX - 2*bufferX
        height: tileY - bufferY

        color: "white"

        ScrollableText {
            id: stagedText
            anchors.fill: parent

            text: ""
            anchors.horizontalCenter: parent.horizontalCenter
            font.family: "Helvetica"
            color: "black"

            // We use pixel size scaled to the tile height, to give us the
            // same approximate size on devices with different DPI.
            font.pixelSize: rect.tileY/4

            // Parses the queue and updates the text output
            function updateText() {
                var fullString = "";
                if (queue.length > 0) {
                    var item = queue[0];
                    // dummy prev item to begin with
                    var lastItem = { content: "",
                                     isWord: false};
                    fullString += item.content;

                    for (var i = 1; i < queue.length; i++) {
                        item = queue[i];

                        // Add a space before new word, or after word
                        // and before letters.
                        if (item.isWord || lastItem.isWord) {
                            fullString += " ";
                        }

                        // Add the utterance
                        fullString += item.content;

                        lastItem = item;
                    }
                }
                stagedText.text = fullString;
            }
        }
    }

    Component.onCompleted: {
        queue = [];
    }

}
