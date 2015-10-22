#ifndef PAGESETSOURCE_H
#define PAGESETSOURCE_H

#include <QMetaType>
#include <QString>

//// A struct representing everything required to load a pageset.
//// Designed to be stored as a QVariant in a Settings object for
//// persistent settings.
struct PagesetSource
{
  enum PagesetType {
    OBF=0,
    JS=1
  };

  PagesetSource() {
    isQResource = true;
    type = JS;
  }

  bool operator==(const PagesetSource &other) const;
  bool operator!=(const PagesetSource &other) const;

  // Is the pageset bundled in as a qresource, or on local filesystem?
  bool isQResource;
  QString rootPath;
  QString name;
  PagesetType type;
};


// These are required for (de)serialization into Settings.
QDataStream &operator<<(QDataStream &out, const PagesetSource &obj);
QDataStream &operator>>(QDataStream &in, PagesetSource &obj);
QDataStream &operator>>(QDataStream& in, PagesetSource::PagesetType& e);

Q_DECLARE_METATYPE(PagesetSource)
Q_DECLARE_METATYPE(PagesetSource::PagesetType)


#endif // PAGESETSOURCE_H
