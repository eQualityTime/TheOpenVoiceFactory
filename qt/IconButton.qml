import QtQuick 2.0
import QtQuick.Controls 1.2

// A clickable, coloured rectangular button containing
// an image and/or a text label.
Rectangle {
    id: button

    signal clicked

    // Padding between items e.g. above the image,
    // between the image and the text, and below the text.
    property int padding: 2

    // Scale of image as proportion of whole button
    property double imageScale: 0.7

    opacity: mouseArea.pressedButtons ? 0.7 : 1
    radius: width*0.02

    property alias font: label.font
    property alias source: image.source
    property alias text: label.text

    Column {
        id: column
        spacing: padding
        anchors.centerIn: parent
        width: parent.width
        anchors.margins: padding + button.border.width

        Image {
            id: image
            height: button.height - label.height - padding
            width: button.width
            anchors.horizontalCenter: parent.horizontalCenter
            source: image_path
            fillMode: Image.PreserveAspectFit
            visible: source != ""
        }
        Label {
            id: label
            text: ""
            anchors.horizontalCenter: parent.horizontalCenter
            font.pixelSize: button.height/6
            font.family: "Comic Sans MS"
            visible: text.length > 0
            wrapMode: Text.WordWrap
            width: parent.width*0.9
            horizontalAlignment: Text.AlignHCenter
        }
    }

    MouseArea {
        id: mouseArea
        anchors.fill: parent
        onClicked: {
            button.clicked();
        }
    }
}

