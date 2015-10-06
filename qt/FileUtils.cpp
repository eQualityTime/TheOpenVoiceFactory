#include "FileUtils.h"
#include <QFile>
#include <QDir>

#include <fstream>

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

bool FileUtils::writeToFile(const QString& filename,
                            const QString& string)
{
  std::ofstream myfile;
  myfile.open(filename.toStdString());
  if (myfile.is_open()) {
    myfile << string.toStdString() << std::endl;
    myfile.close();
    return true;
  }
  else {
    return false;
  }
}
