#ifndef TTSCLIENT_H
#define TTSCLIENT_H

#include <QObject>
#include <QDebug>

// This defines an interface that any OS-specific TTSClient
// must implement.
class TTSClient: public QObject
{
    Q_OBJECT
public:
    explicit TTSClient(QObject *parent = 0) :
    QObject(parent) { }

    virtual ~TTSClient() { }

    Q_INVOKABLE virtual void speak(QString msg ) = 0;

};

// This is a factory function which must be defined on each
// platform. It is free to create any derived TTSClient
// appropriate to the platform.
// So long as you pass a qobject parent to the constructor,
// Qt will take responsibility for the allocated memory.
TTSClient* createTTSClient(QObject *parent = 0);

#endif // TTSCLIENT_H
