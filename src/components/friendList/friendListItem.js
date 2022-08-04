import React from 'react';
//import propTypes from 'prop-types'
import s from './Style.module.css';


export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    let status = '';
    isOnline ? status = `${s.onLine}` : status = `${s.offLine}`;
    return (
        <li className={s.item} key={id}>
            <span className={status}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}








