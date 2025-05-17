import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './BookmarkForm.module.css';

const BookmarkForm = ({ onAddBookmark, bookmarks }) => {
  const [siteName, setSiteName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!siteName.trim()) {
      alert('You must fill the siteName input');
      return;
    }
    if (!url.trim()) {
      alert('You must fill the url input');
      return;
    }

    const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
    if (!urlPattern.test(url)) {
      alert('You must enter a valid url');
      return;
    }

    const normalizedUrl = url.replace(/^https?:\/\//i, '');
    const exists = bookmarks.some(bookmark => 
      bookmark.url.replace(/^https?:\/\//i, '') === normalizedUrl
    );

    if (exists) {
      alert('This website is already bookmarked');
      return;
    }

    onAddBookmark({ name: siteName, url });
    setSiteName('');
    setUrl('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputField}>
        <label htmlFor="site_name">Name</label>
        <input
          id="site_name"
          type="text"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          placeholder="site name"
        />
      </div>

      <div className={styles.inputField}>
        <label htmlFor="url">URL</label>
        <input
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.example.com"
        />
      </div>

      <Button type="submit">Save</Button>
    </form>
  );
};

export default BookmarkForm;