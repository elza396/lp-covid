import React from 'react';
import './ContagionCard.css';

export function ContagionCard(props) {
    return (
        <div className="contagion__card">
            <img alt="" className="contagion__card__img" src={props.img}/>
            <p className="contagion__card__title">{props.title}</p>
            <p className="contagion__card__text">{props.children}</p>
        </div>
    )
}