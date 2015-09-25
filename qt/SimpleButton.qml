import QtQuick 2.0

Rectangle {
    id: button

    color: "white"
    radius: 5
    border.color: "black"
    border.width: 2

    height: label.paintedHeight*1.5
    width: label.paintedWidth*1.5

    signal clicked()

    property alias text: label.text
    property alias font: label.font
    Text {
        id: label
        anchors.fill: parent
        verticalAlignment: Text.AlignVCenter
        horizontalAlignment: Text.AlignHCenter
    }
    MouseArea {
        anchors.fill: parent
        onClicked: { button.clicked(); }
    }
}

