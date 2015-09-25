import QtQuick 2.0
import QtQuick.Controls 1.2

// A full page simple error/message with a single
// button
Rectangle {
    anchors.fill: parent
    color: "white"

    property alias text: msg.text
    signal back()

    Text {
        id: msg
        anchors.horizontalCenter: parent.horizontalCenter
        y: backButton.y - height
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
        onClicked: back();
    }
}

