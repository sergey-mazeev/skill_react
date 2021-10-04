import React from 'react';
import styles from './preview.scss';

interface IPreviewProps {
    src: string,
    alt: string,
    link: string
}

export default ({src, alt, link}: IPreviewProps) => {
  return (
      <a href={link} className={styles.previewLink}>
        <img src={src ? src : "/img/sample-image.jpg"} alt={alt}/>
      </a>
  );
}
