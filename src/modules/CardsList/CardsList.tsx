import React from 'react';
import styles from './cardslist.scss';
import Card from "./Card/Card";

export default () => {
  return (
    <ul className={styles.cardsList}>
      <Card/>
      <Card/>
      <Card/>
    </ul>
  );
}
