import React, {useState} from 'react';
import styles from './settings.scss';

export default () => {

const [isOpen, setOpen] = useState(false);
const handleToggle = () => setOpen(!isOpen);

  return (
      <div className={styles.settings}>
        <button type="button" className={styles.settingsButton} title="Открыть настройки записи" onClick={handleToggle}>
            <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
                <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
                <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
            </svg>
        </button>
        <ul className={[styles.dropdown, isOpen ? styles.dropdown_show : ''].join(' ')}>
          <li className={styles.dropdownItem}>
              <button type="button">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z" fill="#999999"/>
                  </svg>
                  <span>Скрыть</span></button>
          </li>
          <li className={styles.dropdownItem}>
              <button type="button">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z" fill="#999999"/>
                  </svg>
                  <span>Пожаловаться</span></button>
          </li>
          <li className={styles.dropdownItem}>
              <button type="button" onClick={handleToggle}>Закрыть</button>
          </li>
        </ul>
      </div>
  );
}
