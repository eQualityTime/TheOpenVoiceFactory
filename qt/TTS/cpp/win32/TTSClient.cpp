#include <QDebug>

#include "TTSClient.h"

TTSClient::TTSClient(QObject *parent)
    : QObject(parent)
{
}

void TTSClient::speak(QString msg ){
  std::cout << "Cannot speak \"" + msg + "\". No TTS client set up on this OSX." << std::endl;
}
