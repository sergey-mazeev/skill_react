import React from 'react';
import styles from './metadata.scss';
import UserLink from "./UserLink/UserLink";

export default () => {
  return (
      <div className={styles.metaData}>
        <UserLink/>
        <div className={styles.createdAt}>4 часа назад</div>
        <div className={styles.viewTimer}>1 час назад</div>
      </div>
  );
}
