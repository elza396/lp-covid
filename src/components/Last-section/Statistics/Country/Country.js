import React from 'react';
import './Country.css';

export function Country(props) {
    return (
        <tr className="country_section">
            <th>
                <img src={props.img} className="country__flag" alt=""/>
            </th>
            <th className="country">{props.country}</th>
            <th className="country__number">{props.number}</th>
        </tr>
    )
}