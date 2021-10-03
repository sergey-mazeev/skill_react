import * as React from "react";
import styles from './Header.scss';
import PageTitle from "./PageTitle/PageTitle";
import UserLink from "./UserLink/UserLink";
import Search from "./Search/Search";
import MessagesCounter from "./MessagesCounter/MessagesCounter";

export default () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerPanel}>
                {/*user*/}
                <UserLink/>
                {/*search*/}
                <Search/>
                {/*messages*/}
                <MessagesCounter/>
            </div>
            <PageTitle title="Some title"/>
        </header>
    );
}