TEMPLATE = app

QT += qml quick widgets

SOURCES += main.cpp \
    FileUtils.cpp \
    PagesetCollection.cpp \
    PagesetSource.cpp
RESOURCES += main-resources.qrc

# Pagesets listed separately since we have to list
# many files individually.
RESOURCES += ../ck20/images.qrc
RESOURCES += ../javascript/pageset-code.qrc

# Things specific to TTS.
# TODO: Make this a separate library. This isn't as trivial as it could be,
# since we have to bundle in the .java files (I think).

INCLUDEPATH += TTS/cpp/
HEADERS += TTS/cpp/TTSClient.h \
    FileUtils.h \
    PagesetSource.h \
    PagesetCollection.h

# The implementation of the TTSClient object is OS-dependent. The build system
# chooses the appropriate one.
android {
  SOURCES += TTS/cpp/android/TTSClient.cpp
  QT += androidextras
  ANDROID_PACKAGE_SOURCE_DIR = $$PWD/TTS/java/
  OTHER_FILES += TTS/java/AndroidManifest.xml
  DISTFILES += TTS/java/azule-joe/android-tts/AndroidTTSClient.java
}
macx {
  OBJECTIVE_SOURCES += TTS/cpp/macx/TTSClient.mm
  LIBS += -framework AppKit
}
win32 {
  SOURCES += TTS/cpp/win/TTSClient.cpp
}
# On iOS, we have an Objective-C source file instead.
ios {
  OBJECTIVE_SOURCES += TTS/cpp/ios/TTSClient.mm
  LIBS += -framework AVFoundation

  # Set "Target"
  QMAKE_IOS_DEPLOYMENT_TARGET = 8.0

  # Set "Devices" (2=iPad Only)
  QMAKE_IOS_TARGETED_DEVICE_FAMILY = 2
}

# iOS deployment stuff
ios {
    QMAKE_INFO_PLIST = ios/Info.plist
    ios_icon.files = $$files($$PWD/ios/icons/AppIcon*.png)
    QMAKE_BUNDLE_DATA += ios_icon
}

# Additional import path used to resolve QML modules in Qt Creator's code
# model
QML_IMPORT_PATH =

# Default rules for deployment.
include(deployment.pri)

