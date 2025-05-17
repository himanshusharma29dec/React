import React from 'react';
import BookmarkItem from '../BookmarkItem/BookmarkItem';
import styles from './BookmarkList.module.css';

const BookmarkList = ({ bookmarks, onRemoveBookmark }) => {
  return (
    <div className={styles.bookmarkList}>
      <h2>Saved Bookmarks</h2>
      <div className={styles.list}>
        {bookmarks.map((bookmark, index) => (
          <BookmarkItem
            key={index}
            name={bookmark.name}
            url={bookmark.url}
            onRemove={onRemoveBookmark}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarkList;