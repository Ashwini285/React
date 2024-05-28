import { useState } from 'react';
import styles from './Search.module.css';

export default function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search posts"
      />
    </div>
  );
}
