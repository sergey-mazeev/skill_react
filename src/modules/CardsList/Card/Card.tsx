import React from 'react';
import styles from './card.scss';
import Metadata from "./Metadata/Metadata";
import Preview from "./Preview/Preview";
import Buttons from "./Buttons/Buttons";
import Settings from "./Settings/Settings";
import KarmaCounter from "./KarmaCounter/KarmaCounter";
import CommentsCounter from "./CommentsCounter/CommentsCounter";
import Actions from "./Actions/Actions";

export default () => {
    return (
        <li className={styles.card}>
            {/*text content*/}
            <div className={styles.textContent}>
                <Metadata/>
                <h4 className={styles.title}>
                    <a href="#">Реплицированные с зарубежных источников возможности с зарубежных источников возможности с зарубежных источников возможности</a>
                </h4>
            </div>
            {/*preview*/}
            <Preview/>
            {/*settings*/}
            <Settings/>
            {/*actions*/}
            <Buttons>
                <KarmaCounter/>
                <CommentsCounter/>
                <Actions/>
            </Buttons>
        </li>
    );
}
