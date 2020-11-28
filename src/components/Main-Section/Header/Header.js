import React from 'react';
import './Header.css';
import Logo from '../../../resources/logo.svg'
import {Button} from "../../Button/Button";


export function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo_img" src={Logo} alt="logo" />
                <span className="logo_text">Covid - 19</span>
            </div>
            <div className="navigation">
                <a href="">Overview</a>
                <a href="">Contagion</a>
                <a href="">Symptoms</a>
                <a href="">Prevention</a>
                <Button text={"Contact"}/>
            </div>
        </header>
    )
}

