import React from 'react';
import s from './Style.module.css';
import propTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    let len = stats.length;
    console.log(title)
    return (
        <section className={s.statistics}>
            {title && (<h2 className={s.title}>{title}</h2>)}
            <ul className={s.statList}>
                {stats.map(({ label, percentage, id }) =>
                (<li className={s.item} key={id} style={{background: `${randomColor()}`, width: `calc(100% / ${len})` }} >
                    <span className={s.label}>{label}</span>
                    <span className={s.percentage}>{percentage}%</span>
                </li>)
                )}
            </ul>
        </section>
    )
}

function randomColor() {
    return "#"+ Math.floor(Math.random() * 16777215).toString(16);
}

Statistics.propTypes = {
    data: propTypes.arrayOf(
        propTypes.shape({
            title: propTypes.string,
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired
        }))
}
