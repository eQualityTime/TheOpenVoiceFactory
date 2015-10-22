#ifndef PAGESETCOLLECTION_H
#define PAGESETCOLLECTION_H

#include <QAbstractListModel>
#include "PagesetSource.h"


class PagesetCollection : public QAbstractListModel
{

  Q_OBJECT

public:
  PagesetCollection();

  enum PagesetRoles {
    NameRole = Qt::UserRole + 1,
    PathRole,
    TypeRole,
    IsResourceRole
  };

  int rowCount(const QModelIndex & parent = QModelIndex()) const;

  QVariant data(const QModelIndex & index, int role = Qt::DisplayRole) const;

  // Returns the index of the saved pageset.
  Q_INVOKABLE int getPreferredPageset();

  Q_INVOKABLE void setPreferredPageset(int i);



protected:
  QHash<int, QByteArray> roleNames() const;

private:
  void loadCustomPagesetsFromSettings();
  void loadBundledPagesets();

  QList<PagesetSource> mPagesets;
};

#endif // PAGESETCOLLECTION_H
