#include <QDebug>

#include <QtAndroidExtras/QAndroidJniObject>

#include "TTSClient.h"

TTSClient::TTSClient(QObject *parent)
    : QObject(parent)
{
}

void TTSClient::speak(QString msg ){
  QAndroidJniObject javaMessage = QAndroidJniObject::fromString(msg);
  QAndroidJniObject::callStaticMethod<void>("org/qtproject/example/testandroidextras/AndroidTTSClient",
                                            "speak",
                                            "(Ljava/lang/String;)V",
                                            javaMessage.object<jstring>());

}
