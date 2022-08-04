import React from 'react';
import { FriendListItem } from './friendListItem';
import s from './Style.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
            />)}
        </ul>
    )
}