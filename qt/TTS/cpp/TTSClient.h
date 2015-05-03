#ifndef TTSCLIENT_H
#define TTSCLIENT_H

#include <QObject>

class TTSClient: public QObject
{
    Q_OBJECT
public:
    explicit TTSClient(QObject *parent = 0);
    Q_INVOKABLE void speak(QString msg );

};


#endif // TTSCLIENT_H
