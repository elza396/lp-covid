import React from 'react';
import './ButtonWithBorder.css';

export function ButtonWithBorder(props) {
    return (
        <button onClick={props.onClick} className="button">{props.text}</button>
    )
}