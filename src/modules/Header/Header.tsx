import * as React from "react";
import styles from './Header.scss';
import PageTitle from "./PageTitle/PageTitle";
import HeaderPanel from "./HeaderPanel/HeaderPanel";
import SortSelect from "./SortSelect/SortSelect";

export default () => {
    return (
        <header className={styles.header}>
            <HeaderPanel>
                {/*user*/}
                <div className={styles.user}>
                    <div className={styles.userImgWrapper}>
                    <img className={styles.userImg} src="img/user-avatar.jpg" alt=""/>
                    </div>
                </div>
                {/*search*/}
                <div className={styles.search}>
                    <input type="text" className={styles.searchInput} placeholder="Поиск"/>
                </div>
                {/*messages*/}
                <div className={styles.messages}>
                    <a href="#" className={styles.messagesLink}>
                        <i>4</i>
                        <span>Сообщения</span>
                    </a>
                </div>
            </HeaderPanel>
            <PageTitle title="Some title"/>
            <SortSelect/>
        </header>
    );
}