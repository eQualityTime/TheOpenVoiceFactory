// A little C++ class that makes QFile utility functions
// available to QML land.
// This means we can avoid all the async faff of
// HTTP requests for reading files.

#ifndef FILEUTILS_H
#define FILEUTILS_H

#include <QQuickItem>

class FileUtils : public QQuickItem
{
    Q_OBJECT

public:
    Q_INVOKABLE QByteArray read(const QString &fullFilename);
    Q_INVOKABLE QByteArray read(const QString &path,
                                const QString &filename);

    Q_INVOKABLE QString fullFile(const QString &path,
                                 const QString &filename);

    Q_INVOKABLE bool exists(const QString &fullFilename);
    Q_INVOKABLE bool exists(const QString &path,
                            const QString &filename);

    // Write string into file, return success boolean.
    Q_INVOKABLE bool writeToFile(const QString& filename,
                                 const QString& string);

};



#endif // FILEREADER_H
