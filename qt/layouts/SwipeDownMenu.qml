import QtQuick 2.0

Rectangle {
  height: parent.height/10
  width: parent.width

  color: isSwipedDown ? "white" : "transparent"
  property bool isSwipedDown: false

  // TODO: Slide down would be nicer than fade in.
  Behavior on color { ColorAnimation {} }

  SwipeArea {
    anchors.fill: parent

    onVerticalSwipe: {
      // +1 direction = down (since y = 0 at top)
      if (swipeDirection > 0) {
        isSwipedDown = true;
      }
      else {
        isSwipedDown = false
      }
    }
  }

  Row {

  }
}
