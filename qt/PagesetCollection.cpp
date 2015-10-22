#include "PagesetCollection.h"
#include <QDebug>
#include <QSettings>

PagesetCollection::PagesetCollection()
{

  // Set up collection with bundled pagesets.
  {
    PagesetSource source;
    source.isQResource = true;
    source.type = PagesetSource::JS;
    source.rootPath = "page1";
    source.name = "CK 20, JS";

    mPagesets << source;
  }
  {
    PagesetSource source;
    source.isQResource = true;
    source.type = PagesetSource::JS;
    source.rootPath = "page1";
    source.name = "CK 15, JS";

    mPagesets << source;
  }
  {
    PagesetSource source;
    source.isQResource = true;
    source.type = PagesetSource::OBF;
    source.rootPath = "/Users/kirsty/Documents/AzuleJoe/commukate_pageset/communikate-20/";
    source.name = "CK 20, OBF (Coughdrop)";

    mPagesets << source;
  }
  {
    PagesetSource source;
    source.isQResource = true;
    source.type = PagesetSource::OBF;
    source.rootPath = "/Users/kirsty/Documents/AzuleJoe/CK_OBF_new/";
    source.name = "CK 20, OBF (Mulberry)";

    mPagesets << source;
  }
}


// This defines the QML properties
QHash<int, QByteArray> PagesetCollection::roleNames() const
{
  QHash<int, QByteArray> roles;
  roles[NameRole] = "name";
  roles[PathRole] = "path";
  roles[TypeRole] = "type";
  roles[IsResourceRole] = "isResource";

  return roles;
}

// This is required by QAbstractListModel
int PagesetCollection::rowCount(const QModelIndex &parent) const
{
  Q_UNUSED(parent);
  return mPagesets.count();
}


// This defines the actual data for each index
QVariant PagesetCollection::data(const QModelIndex &index, int role) const
{
  if (index.row() < 0 || index.row() >= mPagesets.count())
    return QVariant();

  const PagesetSource &pageset = mPagesets[index.row()];

  switch (role) {
  case NameRole:
    return pageset.name;
    break;
  case PathRole:
    return pageset.rootPath;
    break;
  case TypeRole:
    return pageset.type;
    break;
  case IsResourceRole:
    return pageset.isQResource;
    break;
  default:
    qDebug() << "Unknown PagesetCollection role";
    return QVariant();
    break;
  }
}

namespace {
  const QString pagesetKey = "pageset";
}

int PagesetCollection::getPreferredPageset() {
  QSettings settings;
  const PagesetSource pageset = settings.value(pagesetKey).value<PagesetSource>();

  // Find pageset in list
  int pagesetIndex = 0;
  for( int i=0; i<mPagesets.count(); ++i )
  {
    PagesetSource item = mPagesets[i];
    if (item == pageset) {
      pagesetIndex = i;
      break;
    }
  }
  return pagesetIndex;
}

void PagesetCollection::setPreferredPageset(int i) {
  Q_ASSERT(i>=0 && i < mPagesets.length());

  QSettings settings;
  settings.setValue(pagesetKey,QVariant::fromValue(mPagesets[i]));
}

bool PagesetCollection::isJs()
{
  QSettings settings;
  const PagesetSource pageset = settings.value(pagesetKey).value<PagesetSource>();
  return (pageset.type == PagesetSource::JS);
}

bool PagesetCollection::isObf()
{
  QSettings settings;
  const PagesetSource pageset = settings.value(pagesetKey).value<PagesetSource>();
  return (pageset.type == PagesetSource::OBF);
}

QString PagesetCollection::getPreferredPagesetPath()
{
  QSettings settings;

  const PagesetSource pageset = settings.value(pagesetKey).value<PagesetSource>();
  return pageset.rootPath;
}

QString PagesetCollection::getPreferredPagesetName()
{
  QSettings settings;

  const PagesetSource pageset = settings.value(pagesetKey).value<PagesetSource>();
  return pageset.name;
}
