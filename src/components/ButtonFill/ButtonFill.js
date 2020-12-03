import React from 'react';
import './ButtonFill.css';

export function ButtonFill(props) {
    return (
        <button onClick={props.onClick} className="button2">{props.text}</button>
    )
}