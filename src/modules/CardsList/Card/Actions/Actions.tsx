import React from 'react';
import styles from './actions.scss';

export default () => {
  return (
    <ul className={styles.actions}>
      <li className={styles.actionsItem}>
        <button type="button" className={[styles.actionsButton, styles.actionsButtonShare].join(' ')}
                title="Поделиться">
          <span>Поделиться</span>
        </button>
      </li>
      <li className={styles.actionsItem}>
        <button type="button" className={[styles.actionsButton, styles.actionsButtonDel].join(' ')}
                title="Удалить">
          <span>Удалить</span>
        </button>
      </li>
    </ul>
  );
}
