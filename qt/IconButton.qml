import QtQuick 2.0
import QtQuick.Controls 1.2

// A clickable, coloured rectangular button containing
// an image and (optionally) a text label.
Rectangle {
    id: button

    signal clicked

    // Padding between items e.g. above the image,
    // between the image and the text, and below the text.
    property int padding: 2

    // Scale of image as proportion of whole button
    property double imageScale: 0.8

    opacity: mouseArea.pressedButtons ? 0.7 : 1
    radius: width*0.02

    property alias font: label.font
    property alias source: image.source
    property alias text: label.text

    Column {
        id: column
        spacing: padding
        anchors.fill: parent
        anchors.margins: padding + button.border.width

        // This ensures the image is centred if the text is
        // not in use.
        y: label.visible ? 0 : ((1-imageScale)/2)

        Image {
            id: image
            height: button.height*imageScale
            width: button.width*imageScale
            anchors.horizontalCenter: parent.horizontalCenter
            source: image_path
            fillMode: Image.PreserveAspectFit
        }
        Label {
            id: label
            text: ""
            anchors.horizontalCenter: parent.horizontalCenter
            font.pixelSize: parent.height/10
            visible: text.length > 0
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

