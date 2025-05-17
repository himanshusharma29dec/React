import styles from './BookmarkItem.module.css';

const BookmarkItem = ({ name, url, onRemove }) => {
  return (
    <div className={styles.bookmark}>
      <span>{name}</span>
      <div className={styles.actions}>
        <a 
          className={styles.visit} 
          href={url.startsWith('http') ? url : `//${url}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Visit
        </a>
        <button 
          className={styles.delete} 
          onClick={() => onRemove(url)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookmarkItem;