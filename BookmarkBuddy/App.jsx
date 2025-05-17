import { useState, useEffect } from 'react';

import Header from './components/Header/Header.jsx';
import BookmarkForm from './components/BookmarkForm/BookmarkForm.jsx';
import BookmarkList from './components/BookmarkList/BookmarkList.jsx';

import styles from './App.module.css';

function App() {
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem('bookmarks');
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  useEffect(() => { localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark) => { setBookmarks([...bookmarks, bookmark]); };

  const removeBookmark = (url) => { setBookmarks(bookmarks.filter(bookmark => bookmark.url !== url)); };


  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <BookmarkForm onAddBookmark={addBookmark} bookmarks={bookmarks} />
        <BookmarkList bookmarks={bookmarks} onRemoveBookmark={removeBookmark} />
      </main>
    </div>
  );
}

export default App;