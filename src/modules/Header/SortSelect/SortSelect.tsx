import React from "react";
import styles from "./SortSelect.scss";

export default () => {
    return (
        <div className={styles.sortSelect}>
            <select name="" id="">
                <option value="">Мои посты</option>
                <option value="">Лучшие</option>
            </select>
        </div>
    );
}