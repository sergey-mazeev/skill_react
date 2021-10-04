import React from 'react';
import styles from './metadata.scss';
import UserLink from "./UserLink/UserLink";
import getLastTime from "../../../../utils/getLastTime";

interface IMetadataProps {
    user: {
        id: number,
        name: string,
        avatar: string,
    },
    date: string,
}

export default ({user, date}: IMetadataProps ) => {
  return (
      <div className={styles.metaData}>
        <UserLink userData={user}/>
        <div className={styles.createdAt}>{getLastTime(date)}</div>
        <div className={styles.viewTimer}>1 час назад</div>
      </div>
  );
}
