import React from 'react';
import './Logo.css';
import Logo from "../../resources/logo.svg";

export function Logotype() {
    return (
            <div className="logo">
                <img className="logo_img" src={Logo} alt="logo" />
                <span className="logo_text">Covid - 19</span>
            </div>
    )
}