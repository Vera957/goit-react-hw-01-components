import React from 'react';
import propTypes from 'prop-types'
import s from './Style.module.css';


export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    const status = isOnline ? `${s.onLine}` : `${s.offLine}`;
    return (
        <li className={s.item} key={id}>
            <span className={status}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
    id: propTypes.number,
}








