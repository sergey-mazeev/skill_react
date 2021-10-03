import React from 'react';
import styles from './content.scss';

interface IContentProps {
  children?: React.ReactNode;
}

export default ({children}: IContentProps) => {
  return (
    <main className={styles.content}>
      {children}
    </main>
  );
}
