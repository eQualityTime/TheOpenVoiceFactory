#include "FileUtils.h"
#include <QFile>
#include <QDir>

QByteArray FileUtils::read(const QString &fullFilename)
{
    QFile file(fullFilename);
    if (!file.open(QIODevice::ReadOnly))
        return QByteArray();

    return file.readAll();
}

QByteArray FileUtils::read(const QString &path, const QString &filename)
{
    return this->read(fullFile(path, filename));
}

QString FileUtils::fullFile(const QString &path, const QString &filename)
{
    return QDir(path).filePath(filename);
}

bool FileUtils::exists(const QString &fullFilename)
{
    QFile file(fullFilename);
    return file.exists();
}

bool FileUtils::exists(const QString &path, const QString &filename)
{
    return this->exists(fullFile(path, filename));
}
