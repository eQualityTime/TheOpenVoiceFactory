
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

    property alias text: stagedText.text

    // Append a string. Does *not* add a space.
    function appendWord(word) {
        stagedText.changeText(text + word);
    }

    function resetText() {
        text=""
    }

    function deleteWord() {
        // Get words
        var words = text.split(" ");
        // Remove last word
        words.splice(words.length-1, 1);
        // Re-join
        text = words.join(" ");
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
            font.pointSize: 32
            color: "black"
        }
    }

}
