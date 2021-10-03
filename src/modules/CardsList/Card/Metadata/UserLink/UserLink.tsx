import React from 'react';
import styles from './userlink.scss';

export default () => {
  return (
      <a className={styles.userLink} href="#">
        <img src="/img/user-avatar.jpg" alt="Avatar"/>
        <span>Константин Кодов</span>
      </a>
  );
}
