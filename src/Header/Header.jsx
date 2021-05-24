import * as React from "react";
import styles from './header.scss';

export default function Header () {
    return (
        <header>
            <h1 className={styles.title}>Some Title!</h1>
        </header>
    );
}