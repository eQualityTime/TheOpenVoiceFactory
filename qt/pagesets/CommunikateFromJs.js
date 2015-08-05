var something;

function reset() {
}

function new2dArray(size)
{
    var temp = new Array(size);
    for (var i = 0; i < size; i++) {
        temp[i] = new Array(size);
    }
    return temp;
}

function createThing (input) {
  something = input;
}

var Pageset = function (inputJsFile, inputFunc) {
    var output = Qt.include(inputJsFile);
    var success = 0;
    if (output.status !== success) {
        throw "Cannot find input file " + inputJsFile
    }

    var utterances = new2dArray(5);
    var links = new2dArray(5);

    var document;

    // Run the file.
    // Eval is obviously a security risk!
    eval(inputFunc + "()");

    // Special case
    links[3][0]="speak";

    this.utterances = utterances;
    this.links = links;
    this.iconBg = document.main.src

    console.log('Pageset instantiated');
};
