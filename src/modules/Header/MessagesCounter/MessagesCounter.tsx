import React from 'react';
import styles from './messagescounter.scss';

export default () => {
  return (
      <div className={styles.messages}>
        <a href="#" className={styles.messagesLink}>
          <i>4</i>
          <span>Сообщения</span>
        </a>
      </div>
  );
}
