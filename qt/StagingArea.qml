import QtQuick 2.2
import QtQuick.Controls 1.2
import QtQuick.Dialogs 1.2
import QtQuick.Controls.Styles 1.2

import "layouts"


Rectangle {
  id:rect

  color: "transparent"

  property alias text: stagedText.text

  // Queue of words and/or letters that are staged
  // Each item looks like:
  // { content: 'text', isWord: true}
  // { content: 'e', isWord: false}
  property variant queue: ({})

  Component.onCompleted: {
    queue = [];
  }

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

  ScrollableText {
    id: stagedText
    anchors.fill: parent
    anchors.margins: 10

    text: ""
    anchors.horizontalCenter: parent.horizontalCenter
    font.family: "Helvetica"
    color: "black"

    // We use pixel size scaled to the tile height, to give us the
    // same approximate size on devices with different DPI.
    font.pixelSize: height/4

    // Parses the queue and updates the text output
    function updateText() {
      var fullString = "";
      if (queue.length > 0) {

        // First item
        var item = queue[0];
        fullString += item.content;

        // All subsequent items
        var lastItem = item;
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
      stagedText.changeText(fullString);

    }
  }
}
