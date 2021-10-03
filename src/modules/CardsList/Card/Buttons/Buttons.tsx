import React from 'react';
import styles from './buttons.scss';

interface IButtons {
  children?: React.ReactNode,
}

export default ({children}: IButtons) => {
  return (
    <div className={styles.buttons}>
      {children}
    </div>
  );
}
