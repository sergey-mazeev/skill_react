import React from 'react';
import styles from './search.scss';

export default () => {
  return (
      <div className={styles.search}>
        <input type="text" className={styles.searchInput} placeholder="Поиск"/>
      </div>
  );
}
