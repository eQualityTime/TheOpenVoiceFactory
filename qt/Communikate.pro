TEMPLATE = app

QT += qml quick widgets

SOURCES += main.cpp

RESOURCES += main-resources.qrc

# Pagesets listed separately since we have to list
# many files individually.
RESOURCES += ../images/images.qrc
RESOURCES += ../javascript/pageset-code.qrc

# Additional import path used to resolve QML modules in Qt Creator's code model
QML_IMPORT_PATH =

# Default rules for deployment.
include(deployment.pri)
