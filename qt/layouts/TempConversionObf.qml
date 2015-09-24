import QtQuick 2.0
import ".."
import com.azulejoe 1.0

// This is not intended for an actual layout, it's just
// a temporary class to semi-automate the conversion of
// Communikate from the old JS format to an OBF.
Item {
  id: topItem

  // top level OBF folder, defines whole set of pages
  property string pageset: ""

  // Individual page to load
  property string page: ""

  Component.onCompleted: {
    processPage(pageset, page);
    while (listQueued.length > 0) {
      processPage(pageset, listQueued.pop())
    }
  }

  property var listCompleted: []
  property var listQueued: []

  function queuePage(page) {
    if (listCompleted.indexOf(page) == -1 &&
        listCompleted.indexOf(page) == -1) {
      listQueued.push(page);
    }
  }

  function processPage(topDir, page) {
    console.log("Processing page " + topDir + page);

    var root = "/Users/kirsty/Documents/AzuleJoe/CK_OBF_new/"

    // Read manifest file for mappings/default page
    var manifestFile = fileUtils.fullFile(topDir, "manifest.json");

    if (!fileUtils.exists(manifestFile)) {
      console.log("Cannot find file " + manifestFile);
      return null;
    }

    var fileContent = fileUtils.read(manifestFile);
    var manifestObj = JSON.parse(fileContent);

    // Default to root page if none requested
    if (page === "") {
      page = manifestObj["root"];
    }

    // Read requested page
    var pageFile = fileUtils.fullFile(topDir, page);

    if (!fileUtils.exists(pageFile)) {
      console.log("Cannot find file " + pageFile);
      return null;
    }

    fileContent = fileUtils.read(pageFile);
    var obj = JSON.parse(fileContent);

    // SUMMARY
    // Remove coughdrop-ey things
    if (obj["url"]) {
      delete obj["url"];
    }
    if (obj["data_url"]) {
      delete obj["data_url"];
    }
    if (obj["description_html"]) {
      delete obj["description_html"];
    }
    if (obj["ext_coughdrop_settings"]) {
      delete obj["ext_coughdrop_settings"];
    }

    // IMAGES
    // Remove all images (they are defined in the manifest)
    if (obj["images"]) {
      delete obj["images"];
    }

    // BUTTONS
    // Replace image_id
    // Remove load_board.url and .data_url
    var gridArray = obj["grid"]["order"];
    for (var prop in obj) {
      if (prop === "buttons") {
        var allButtons = obj[prop];
        for (var buttonName in allButtons) {
          if (obj[prop][buttonName]["load_board"]) {
            delete obj[prop][buttonName]["load_board"]["url"]
            delete obj[prop][buttonName]["load_board"]["data_url"]
            // Queue the linked board for processing (if it hasn't been already).
            queuePage(obj[prop][buttonName]["load_board"]["path"]);
          }
          if (obj[prop][buttonName]["image_id"]) {
            var label = obj[prop][buttonName]["label"];
            var imagename = removeSpaces(label).toLowerCase();
            obj[prop][buttonName]["image_id"] = imagename;
          }
        }
      }
    }
    var jsonText = JSON.stringify(obj, null, '\t');
    fileUtils.writeToFile(root + page , jsonText);

    listCompleted.push(page);
  }

  function getRow(gridArray, id) {
    var l = gridArray.length;
    for(var i=0; i < l; i++){
      var pos = gridArray[i].indexOf(id);
      if(pos !== -1){
        return i;
      }
    }
  }

  function getCol(gridArray, id) {
    var l = gridArray.length;
    for(var i=0; i < l; i++){
      var pos = gridArray[i].indexOf(id);
      if(pos !== -1){
        return pos;
      }
    }
  }

  function removeSpaces(input) {
    return input.replace(/ /g,'');
  }   

  FileUtils {
    id: fileUtils
  }

}

