import React from 'react';
import s from './Style.module.css';


export const Profile = ({ avatar, username, tag, location, followers, views, likes }) => {
  return (
    <div className={s.profile}>
      <div className={s.discription}>
        <img
          src={avatar}
          alt="User avatar"
          className={s.img}
        />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}> {followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}> {views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  )
}



