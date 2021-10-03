import React from 'react';
import styles from './preview.scss';

export default () => {
  return (
      <a href="#" className={styles.previewLink}>
        <img src="/img/sample-image.jpg" alt="Preview Image"/>
      </a>
  );
}
