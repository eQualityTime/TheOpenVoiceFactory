#include <QDebug>

#include "TTSClient.h"

#include <iostream>

class IosTTSClient : public TTSClient {

public:
  explicit IosTTSClient(QObject *parent = 0):
    TTSClient(parent)
  {
  }

  Q_INVOKABLE virtual void speak(QString msg ) {
    std::cout << "Cannot speak \"" + msg.toStdString() + "\". No TTS client set up on ios yet." << std::endl;
  }

};

TTSClient* createTTSClient(QObject *parent) {
  return new IosTTSClient(parent);
}
