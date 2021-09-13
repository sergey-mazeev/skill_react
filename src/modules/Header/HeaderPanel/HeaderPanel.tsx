import React from "react";
import styles from "./HeaderPanel.scss";

interface IHeaderPanel {
    children: React.ReactNode;
}

export default ({children}: IHeaderPanel) => {
    return (
        <div className={styles.headerPanel}>
            {children}
        </div>
    );
}