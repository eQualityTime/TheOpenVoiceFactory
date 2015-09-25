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
    bool success = (bool)QAndroidJniObject::
            callStaticMethod<jboolean>("org/qtproject/example/testandroidextras/AndroidTTSClient",
                                       "speak",
                                       "(Ljava/lang/String;)Z",
                                       javaMessage.object<jstring>());
    if (!success) {
        emit ttsError();
    }
  }

};

TTSClient* createTTSClient(QObject *parent) {
  return new AndroidTTSClient(parent);
}
