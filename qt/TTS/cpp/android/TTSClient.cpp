#include <QDebug>

#include <QtAndroidExtras/QAndroidJniObject>

#include "TTSClient.h"

class AndroidTTSClient : public TTSClient {
public:
  explicit AndroidTTSClient(QObject* parent = 0):
    TTSClient(parent)
  {
  }

  Q_INVOKABLE virtual void speak(QString msg ) {
    QAndroidJniObject javaMessage = QAndroidJniObject::fromString(msg);
    QAndroidJniObject::callStaticMethod<void>("org/qtproject/example/testandroidextras/AndroidTTSClient",
                                              "speak",
                                              "(Ljava/lang/String;)V",
                                              javaMessage.object<jstring>());
  }

};

TTSClient* createTTSClient(QObject *parent) {
  return new AndroidTTSClient(parent);
}
