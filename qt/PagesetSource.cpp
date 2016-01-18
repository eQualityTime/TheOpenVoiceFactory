#include "PagesetSource.h"

#include "QDataStream"

QDataStream&operator<<(QDataStream& out, const PagesetSource& obj)
{
  out << obj.name << obj.rootPath << obj.type << obj.isQResource;
  return out;
}


QDataStream&operator>>(QDataStream& in, PagesetSource& obj)
{
  in >> obj.name >> obj.rootPath >> obj.type >> obj.isQResource;
  return in;
}


bool PagesetSource::operator==(const PagesetSource& other) const {
  return ( (this->name == other.name) &&
           (this->rootPath == other.rootPath) &&
           (this->isQResource == other.isQResource) &&
           (this->type == other.type) );

}


bool PagesetSource::operator!=(const PagesetSource& other) const {
  return !(*this == other);
}


QDataStream&operator>>(QDataStream& in, PagesetSource::PagesetType& e)
{
  // This is a not-very-nice hack to support enums in a QDataStream.
  quint32 buffer;
  in >> buffer;
  e = PagesetSource::PagesetType(buffer);

  return in;
}
