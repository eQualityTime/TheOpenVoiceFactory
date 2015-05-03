#include <QDebug>

#include "TTSClient.h"

#include <iostream>


class OsxTTSClient : public TTSClient {

public:
  explicit OsxTTSClient(QObject *parent = 0):
    TTSClient(parent)
  {
  }

  Q_INVOKABLE virtual void speak(QString msg ) {
    std::cout << "Cannot speak \"" + msg.toStdString() + "\". No TTS client set up on macx yet." << std::endl;
  }

};

TTSClient* createTTSClient(QObject *parent) {
  return new OsxTTSClient(parent);
}
