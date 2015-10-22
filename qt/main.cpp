#include <QApplication>
#include <QQmlApplicationEngine>
#include <QQmlContext>
#include <QtQml>

#include "TTSClient.h"
#include "FileUtils.h"
#include "PagesetCollection.h"

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QQmlApplicationEngine engine;

    // Set up a top level TTS Client object, which QML can use.    
    QScopedPointer<TTSClient> ttsClient;
    ttsClient.reset(createTTSClient(&engine));
    engine.rootContext()->setContextProperty("TTSClient", ttsClient.data());

    // Register any cpp classes we want to instantiate in QML
    qmlRegisterType<PagesetCollection>("com.azulejoe", 1, 0, "PagesetCollection");
    qmlRegisterType<FileUtils>("com.azulejoe", 1, 0, "FileUtils");

    // Metatypes for signals/slots/settings
    qRegisterMetaType<PagesetSource>("PagesetSource");
    qRegisterMetaTypeStreamOperators<PagesetSource>("PagesetSource");

    // It's important that we register TTSClient *before* loading QML.
    engine.load(QUrl(QStringLiteral("qrc:/main.qml")));

    return app.exec();
}
