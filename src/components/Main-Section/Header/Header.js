import React from 'react';
import './Header.css';
import {Button} from "../../Button/Button";
import {Logotype} from "../../Logo/Logo";


export function Header() {
    return (
        <header className="header">
            <Logotype />
            <div className="navigation">
                <a href={"#overview"}>Overview</a>
                <a href={"#contagion"}>Contagion</a>
                <a href={"#symptoms"}>Symptoms</a>
                <a href={"#prevention"}>Prevention</a>
                <Button text={"Contact"}/>
            </div>
        </header>
    )
}

