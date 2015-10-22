import QtQuick 2.0
import QtQuick.Controls 1.2
import QtQuick.Controls.Styles 1.2
import Qt.labs.settings 1.0
import com.azulejoe 1.0

// Main item is full settings page.
Item {
  anchors.fill: parent
  id: page

  // Top rectangle is menu bar, swipes down
  Rectangle {
    id: menu
    height: parent.height/10
    width: parent.width

    color: isSwipedDown ? "cornflowerblue" : "transparent"
    property bool isSwipedDown: false

    onIsSwipedDownChanged: {
      if (!isSwipedDown) {
        page.hideAllTabs();
      }
    }

    // TODO: Slide down would be nicer than fade in.
    Behavior on color { ColorAnimation {} }

    SwipeArea {
      anchors.fill: parent

      onVerticalSwipe: {
        // +1 direction = down (since y = 0 at top)
        if (swipeDirection > 0) {
          menu.isSwipedDown = true;
        }
        else {
          menu.isSwipedDown = false;
        }
      }
    }

    property int spacing: parent.width/20

    // row of buttons, anchored left
    Row {
      visible: menu.isSwipedDown
      spacing: parent.spacing
      height: menu.height
      anchors.left: parent.left
      anchors.leftMargin: parent.spacing/2

      Text {
        text: "SETTINGS"
        font.pixelSize: menu.height/4
        anchors.verticalCenter: parent.verticalCenter
      }

      Button {
        anchors.verticalCenter: parent.verticalCenter
        text: "Pagesets"
        style: ButtonStyle {
          background: Rectangle {
            color : "lightgrey"
          }
        }
        onClicked: {
          page.hideAllTabs();
          pagesets.visible = true;
        }
      }

      Button {
        anchors.verticalCenter: parent.verticalCenter
        text: "Access"
        style: ButtonStyle {
          background: Rectangle {
            id: rect
            color : "lightgrey"
          }
        }
        onClicked: {
          page.hideAllTabs();
          access.visible = true;
        }
      }
    }

    // row of buttons, anchored right
    Row {
      height: menu.height
      visible: menu.isSwipedDown
      spacing: parent.width/15
      anchors.right: parent.right
      anchors.rightMargin: parent.spacing/2

      Button {
        anchors.verticalCenter: parent.verticalCenter
        text: "Exit Settings"
        style: ButtonStyle {
          background: Rectangle {
            color : "lightgrey"
          }
        }
        onClicked: {
          menu.isSwipedDown = false;
        }
      }
    }
  }

  // This object will store persistent settings
  Settings {
    id: settings
  }

  function hideAllTabs() {
    pagesets.visible = false;
    access.visible = false;
  }

  // TODO: Mark currently-selected page.

  // Settings content for Pagesets
  Rectangle {
    id: pagesets
    visible: false
    color: "aliceblue"
    width: parent.width
    height: parent.height - menu.height
    anchors.top: menu.bottom

    Column {
      id: pagesetsCol
      spacing: pagesets.height/20
      anchors.fill: parent
      anchors.leftMargin: parent.width/6
      anchors.topMargin: parent.height/6

      Row {
        spacing: parent.spacing/4

        Text {
          text: qsTr("Selected pageset")
          anchors.verticalCenter: parent.verticalCenter
        }
        ComboBox {
          id: combo
          anchors.verticalCenter: parent.verticalCenter
          model: pagesetCollection
          width: 300
          textRole: "name"

          onCurrentIndexChanged: {
            // This ensure the pageset gets saved in settings in C++.
            // We can't save a custom QVariant in a QML settings object.
            if (this.completed) {
              pagesetCollection.setPreferredPageset(currentIndex);

              // Reload the new pageset in the app
              stackView.resetPageset();
            }
          }

          property bool completed: false

          Component.onCompleted: {
            currentIndex = pagesetCollection.getPreferredPageset();
            this.completed = true;
          }
        }
      }
    }
  }

  // Settings content for Pagesets
  Rectangle {
    id: access
    visible: false
    color: "aliceblue"
    width: parent.width
    height: parent.height - menu.height
    anchors.top: menu.bottom

    Column {
      id: accessCol
      spacing: pagesets.height/20
      anchors.fill: parent
      anchors.leftMargin: parent.width/6
      anchors.topMargin: parent.height/6

      Text {
        text: qsTr("Coming soon!")
      }
    }
  }
}
