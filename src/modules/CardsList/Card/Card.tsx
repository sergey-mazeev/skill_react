import React from 'react';
import styles from './card.scss';
import Metadata from "./Metadata/Metadata";
import Preview from "./Preview/Preview";
import Buttons from "./Buttons/Buttons";
import Settings from "./Settings/Settings";
import KarmaCounter from "./KarmaCounter/KarmaCounter";
import CommentsCounter from "./CommentsCounter/CommentsCounter";
import Actions from "./Actions/Actions";

interface IPostData {
    postData: {
        postId: number,
        postTitle: string,
        postUrl: string,
        postPreview: string,
        postDate: string,
        postUser: {
            id: number,
            name: string,
            avatar: string,
        }
    }
}

export default ({postData}: IPostData) => {

    return (
        <li className={styles.card}>
            {/*text content*/}
            <div className={styles.textContent}>
                <Metadata user={postData.postUser} date={postData.postDate}/>
                <h4 className={styles.title}>
                    <a href={postData.postUrl}>{postData.postTitle}</a>
                </h4>
            </div>
            {/*preview*/}
            <Preview src={postData.postPreview} alt={postData.postTitle} link={postData.postUrl}/>
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
