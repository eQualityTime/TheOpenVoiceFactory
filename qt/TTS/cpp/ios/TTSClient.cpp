#include <QDebug>

#include "TTSClient.h"

#include <iostream>

TTSClient::TTSClient(QObject *parent)
    : QObject(parent)
{
}

void TTSClient::speak(QString msg ){
  std::cout << "Cannot speak \"" + msg.toStdString() + "\". No TTS client set up on ios yet." << std::endl;
}
