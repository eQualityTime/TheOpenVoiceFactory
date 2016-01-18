import QtQuick 2.0

// This is a pretty simple (read: not fully featured or robust)
// implementation of an area that triggers swipe events
MouseArea {
  id: mouseArea
  anchors.fill: parent

  // Direction = +/-1, where + means in the positive x/y direction.
  signal horizontalSwipe(int swipeDirection)
  signal verticalSwipe(int swipeDirection)

  // Proportion of width/height required to trigger a swipe
  property double horizontalSwipeThreshold: 0.2
  property double verticalSwipeThreshold: 0.2
  property int velocityForSwipe: 5

  // Internal properties
  property real xVelocity: 0.0
  property real yVelocity: 0.0
  property int xStart: 0
  property int yStart: 0
  property int xPrev: 0
  property int yPrev: 0
  property bool tracing: false

  onPressed: {
    xStart = mouse.x
    yStart = mouse.y
    xPrev = mouse.x
    yPrev = mouse.y

    xVelocity = 0
    yVelocity = 0

    tracing = true
  }

  onPositionChanged: {
    if ( !tracing ) return

    var currXVel = (mouse.x-xPrev)
    var currYVel = (mouse.y-yPrev)

    xVelocity = (xVelocity + currXVel)/2.0
    yVelocity = (yVelocity + currYVel)/2.0

    xPrev = mouse.x
    yPrev = mouse.y
  }

  onReleased: {
    tracing = false
    var xDiff = mouse.x - xStart;
    var yDiff = mouse.y - yStart;
    var direction;

    if ( Math.abs(xVelocity) > mouseArea.velocityForSwipe &&
         Math.abs(xDiff) > mouseArea.width*mouseArea.horizontalSwipeThreshold ) {
      direction = (xDiff > 0) ? 1 : -1
      mouseArea.horizontalSwipe(direction);
    }
    if ( Math.abs(yVelocity) > mouseArea.velocityForSwipe &&
         Math.abs(yDiff) > mouseArea.height*mouseArea.verticalSwipeThreshold ) {
      direction = (yDiff > 0) ? 1 : -1
      mouseArea.verticalSwipe(direction);
    }
  }
}
