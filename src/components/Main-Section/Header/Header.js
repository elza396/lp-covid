import React from 'react';
import './Header.css';
import {Button} from "../../Button/Button";
import {Logotype} from "../../Logo/Logo";


export function Header() {
    return (
        <header className="header">
            <Logotype />
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

