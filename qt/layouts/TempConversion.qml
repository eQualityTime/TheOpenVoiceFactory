import QtQuick 2.0
import ".."
import com.azulejoe 1.0

// This is not intended for an actual layout, it's just
// a temporary class to semi-automate the conversion of
// Communikate from the old JS format to an OBF.
Item {

  // The page name, e.g. "food".
  // Must correspond to the function called to populate the
  // data, e.g. food().
  property string page: ""    // individual page
  property bool isFirstPage: false


  // This object is responsible for loading the input pageset.
  // Everything gets read into pageLoader.listModel
  PageData {
    id: pageLoader
    Component.onCompleted: {
      var success = pageLoader.loadFileFromJs(
            "qrc:/" + page + ".js",
            page);

      if (success) {
        console.log("Read page " + page)
      }
      else {
        console.log("Error reading page");
      }

      var root = "/Users/kirsty/Documents/AzuleJoe/CK_OBF_new/"


      // Write manifest if this is the first page
      if (isFirstPage) {
        var manifest = {};
        manifest["format"] = "open-board-0.1";
        manifest["root"] = page + ".obf";

        var jsonText = JSON.stringify(manifest, null, '\t');
        fileUtils.writeToFile(root + "manifest.json", jsonText);
      }

      // Write page's header guff
      var output = {};
      output["format"] = "open-board-0.1";
      output["id"] = page;
      output["locale"] = "en";
      output["name"] = "CommuniKate " + page;
      output["default_layout"] = "landscape";

      output["license"] = {}
      output["license"]["type"] = "CC By-NC-SA";
      output["license"]["copyright_notice_url"] = "http] =//creativecommons.org/licenses/by-nc-sa/3.0/";
      output["license"]["author_name"] = "Kate McCallum";
      output["license"]["author_url"] = "https://twitter.com/KateMcCallumuk";

      // Grid structure
      output["grid"] = {};
      output["grid"]["rows"] = 4
      output["grid"]["columns"] = 5
      output["grid"]["order"] = [ [0, 1, 2, 3, 4],
                                 [5, 6, 7, 8, 9],
                                 [10, 11, 12, 13, 14],
                                 [15, 16, 17, 18, 19],
                                 [20, 21, 22, 23, 24] ];

      // Write out each of the buttons
      output["buttons"]=[]
      for (var index = 0; index < 25; index++) {
        var button = pageLoader.listModel.get(index);

        output["buttons"][index] = {}
        output["buttons"][index]["id"] = index

        // Label may come from utterance, or link.
        if (button["utterance"] && removeSpaces(button["utterance"]) !== "") {
          output["buttons"][index]["label"] = button["utterance"];
        }
        else if (button["link"] && button["link"] !== "") {
          output["buttons"][index]["label"] = button["link"];
        }
        else { // no button here
          // TODO: Set button ID in grid to null.
        }

        if (button["link"] && button["link"] !== "") {
          // Special cases
          switch (button["link"] ) {
          case "clear":
            output["buttons"][index]["action"] = ":clear";
            break;
          case "deleteword":
            output["buttons"][index]["action"] = ":deleteword";
            break;
          case "Backspace":
            output["buttons"][index]["action"] = ":backspace";
            break;
          case "speak":
            output["buttons"][index]["action"] = ":speak";
            break;
          case "1":
            output["buttons"][index]["action"] = ":toppage";
            break;
          case "google":
            output["buttons"][index]["action"] = ":google";
            break;
          case "youtube":
            output["buttons"][index]["action"] = ":youtube";
            break;
          case "twitter":
            output["buttons"][index]["action"] = ":twitter";
            break;
          default:
            output["buttons"][index]["load_board"] = {}
            output["buttons"][index]["load_board"]["id"] = button["link"];
            output["buttons"][index]["load_board"]["path"] = button["link"] + ".obf";
            break;
          }
        }

        // Image
        if(output["buttons"][index]["label"]) {
          var imageName = "" + getCol(index) + getRow(index) +
                          removeSpaces(output["buttons"][index]["label"]) +
                          ".png";
          output["buttons"][index]["image_id"] = imageName;
        }

      }

      // Write page to file
      var jsonText = JSON.stringify(output, null, '\t');
      fileUtils.writeToFile(root + "testpage.json", jsonText);

    }

    function getRow(index) {
      return Math.floor(index/5);
    }

    function getCol(index) {
      return index % 5;
    }

    function removeSpaces(input) {
      return input.replace(/ /g,'');
    }
  }

  FileUtils {
    id: fileUtils
  }

}

