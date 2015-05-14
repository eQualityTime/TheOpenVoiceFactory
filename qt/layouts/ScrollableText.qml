import QtQuick 2.0

Flickable {
    id: flick

    property alias text: edit.text
    property alias font: edit.font
    property alias color: edit.color

    contentWidth: edit.paintedWidth
    contentHeight: edit.paintedHeight
    clip: true

    // Programmatically change the text.
    // This will ensure that the end of the text is scrolled into
    // view, rather than the cursor.
    function changeText(txt) {
        edit.text = txt;
        // Automatically scroll to the bottom
        if (edit.contentHeight > edit.height) {
            contentY = edit.contentHeight - edit.height;
        }
    }

    function ensureVisible(r)
    {
        if (contentX >= r.x)
            contentX = r.x;
        else if (contentX+width <= r.x+r.width)
            contentX = r.x+r.width-width;
        if (contentY >= r.y)
            contentY = r.y;
        else if (contentY+height <= r.y+r.height)
            contentY = r.y+r.height-height;
    }

    Text {
        id: edit

        width: flick.width
        height: flick.height
        focus: true
        wrapMode: TextEdit.Wrap
    }

}
