#include <QApplication>
#include <QQmlApplicationEngine>
#include <QQmlContext>

#include "TTSClient.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QQmlApplicationEngine engine;

    // Set up a top level TTS Client object, which QML can use.
    TTSClient ttsClient(&engine);
    engine.rootContext()->setContextProperty("TTSClient", &ttsClient);

    // It's important that we register TTSClient *before* loading QML.
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

    return app.exec();
}
