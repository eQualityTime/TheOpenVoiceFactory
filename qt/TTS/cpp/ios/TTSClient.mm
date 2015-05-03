#include <QDebug>

#include "TTSClient.h"

#include <iostream>

#import <AVFoundation/AVSpeechSynthesis.h>

class IosTTSClient : public TTSClient {

public:
  explicit IosTTSClient(QObject *parent = 0):
    TTSClient(parent),
    m_synth([[AVSpeechSynthesizer alloc] init])
  {
  }

  ~IosTTSClient() {
    [m_synth release];
  }

  Q_INVOKABLE virtual void speak(QString msg ) {
    NSString *msg_ns = [NSString stringWithCString:msg.toStdString().c_str()
                                       encoding:[NSString defaultCStringEncoding]];

    AVSpeechUtterance *utterance =
        [[[AVSpeechUtterance alloc] initWithString: msg_ns] autorelease];

    // The default rate is *really* fast.
    // Ideally this would be modifiable, but for now just set it to something
    // sensible
    utterance.rate = 0.2;
    [m_synth speakUtterance:utterance];
  }

private:
    AVSpeechSynthesizer *m_synth;

};

TTSClient* createTTSClient(QObject *parent) {
  return new IosTTSClient(parent);
}
