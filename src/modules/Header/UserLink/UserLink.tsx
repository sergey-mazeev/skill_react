import React from 'react';
import styles from './userlink.scss';

export default () => {
  return (
      <a className={styles.user} href="#">
        <div className={styles.userImgWrapper}>
          <img className={styles.userImg} src="img/user-avatar.jpg" alt=""/>
        </div>
        <div className={styles.userName}>Алексей</div>
      </a>
  );
}
