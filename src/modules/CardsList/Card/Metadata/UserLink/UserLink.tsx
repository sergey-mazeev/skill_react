import React from 'react';
import styles from './userlink.scss';

interface IUserLinkProps {
    userData: {
        id: number,
        name: string,
        avatar: string,
    }
}

export default ({userData}: IUserLinkProps) => {
    const {id, name, avatar} = userData;
    return (
        <a className={styles.userLink} href={`/users/${id}`}>
            <img src={avatar} alt={name}/>
            <span>{name}</span>
        </a>
    );
}
