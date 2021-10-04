import React from 'react';
import styles from './cardslist.scss';
import Card from "./Card/Card";

import * as dummyData from '../../../dummyData.json';

export default () => {
    const cards: Array<React.ReactNode> = dummyData.posts.map((postData) => (<Card postData={postData} key={postData.postId}/>))
  return (
    <ul className={styles.cardsList}>
        {cards}
    </ul>
  );
}
