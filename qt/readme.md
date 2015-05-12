# Qt mobile app.

### Technologies

We use [Qt Quick](http://doc.qt.io/qt-4.8/qml-intro.html) under the LGPL to build a cross-platform, mobile-styled app. Qt Quick provides user interface elements specifically designed for modern, fluid user interaction. Everything is cross-platform, so we can build a single app for deployment on multiple platforms. This also enables a faster development cycle since you can spend most of your development cycles running on your desktop, before having to deal with any mobile devices or emulators.

- User interfaces are declared using the QML language.
- High level UI logic is written in Javascript.
- Low level components can be written in C++.
- The build system uses qmake.

### Requirements
In order to build the app, you will require:
- Qt Creator and Qt
- (for Android) Android SDK, Android NDK and JDK
- (for iOS/OSX) Xcode

### Building the app
- Open *qt/AzuleJoe.pro* in Qt Creator
- Select the platforms you want to build for
- Click *Configure*
- Build and Run!

See [Deploying an application for Android](http://doc.qt.io/qt-5/deployment-android.html) and [Qt on iOS](http://doc.qt.io/qt-5/ios-support.html) for Android/iOS-specific configuration.

### Windows support
No testing has yet been carried out on Windows. In theory the UI should work as-is, but you will need to hook up to the Windows Text-to-Speech API before the app will 'speak'. This will need to be implemented in *qt/TTS/cpp/win32/TTSClient.cpp*.
