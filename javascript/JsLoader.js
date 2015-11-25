
function loadResource(resource) {
    var output = Qt.include(resource);
    var success = 0;
    return (output.status === success);
}
