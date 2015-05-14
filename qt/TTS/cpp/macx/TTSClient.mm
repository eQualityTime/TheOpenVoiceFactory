#include <QDebug>

#include "TTSClient.h"

#include <iostream>

#import <AppKit/NSSpeechSynthesizer.h>
#include <Foundation/NSString.h>

class OsxTTSClient : public TTSClient {

public:
  explicit OsxTTSClient(QObject *parent = 0):
    TTSClient(parent),
    m_synth([[NSSpeechSynthesizer alloc] init])
  {
  }

  ~OsxTTSClient() {
    [m_synth release];
  }

  Q_INVOKABLE virtual void speak(QString msg ) {
    std::string string = msg.toStdString();

    [m_synth startSpeakingString:
        [NSString stringWithUTF8String:
          string.c_str()
        ]
      ];
  }

private:
    NSSpeechSynthesizer* m_synth;

};

TTSClient* createTTSClient(QObject *parent) {
  return new OsxTTSClient(parent);
}
