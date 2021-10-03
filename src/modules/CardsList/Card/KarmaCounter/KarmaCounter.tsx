import React, {useState} from 'react';
import styles from './karmacounter.scss';

export default () => {
  const [counterValue, setCounter] = useState(150);
  const handleClick = (method: 'dec' | 'inc') => {
    let newValue: number;
    switch (method) {
      case "dec": newValue = counterValue - 1; break;
      case "inc": newValue = counterValue + 1; break;
      default: return false;
    }
    setCounter(newValue);
  }
  return (
      <div className={styles.karmaCounter}>
        <button className={[styles.button, styles.buttonInc].join(' ')} type="button" title="Повысить рейтинг" onClick={() => {handleClick('inc')}}>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
          </svg>
        </button>
        <span className={styles.karmaCounterValue}>{counterValue}</span>
        <button className={[styles.button, styles.buttonDec].join(' ')} type="button" title="Понизить рейтинг" onClick={() => {handleClick('dec')}}>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
          </svg>
        </button>
      </div>
  );
}
