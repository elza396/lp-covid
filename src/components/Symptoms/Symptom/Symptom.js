import React from 'react';
import './Symptom.css';

export function Symptom(props) {
    return (
        <div className="symptom__circle">
            <p>{props.children}</p>
        </div>
    )
}