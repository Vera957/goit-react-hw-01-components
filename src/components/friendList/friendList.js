import React from 'react';
import { FriendListItem } from './friendListItem';
import propTypes from 'prop-types';
import s from './Style.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => {
                return <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            }
            )
            }
        </ul>
    )
}
FriendList.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
    id: propTypes.number,
}









