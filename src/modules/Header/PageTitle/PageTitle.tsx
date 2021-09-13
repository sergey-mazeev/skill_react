import React from "react";
import styles from "./PageTitle.scss";

interface IPageTitle {
    title: string;
}

export default ({title}: IPageTitle) => {
    return (
      <h1 className={styles.title}>{title}</h1>
    );
}