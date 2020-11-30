import React from 'react';
import './Footer.css';
import {Logotype} from "../../Logo/Logo";
import Link1 from "../../../resources/link1.svg";
import Link2 from "../../../resources/link2.svg";
import Link3 from "../../../resources/link3.svg";
import Link4 from "../../../resources/link4.svg";


export function Footer() {
    return (
        <div className="footer">
            <Logotype />
            <div className="navigation">
                <a href="">Overview</a>
                <a href="">Contagion</a>
                <a href="">Symptoms</a>
                <a href="">Prevention</a>
            </div>
            <div>
                <div className="navigation">
                    <a href="">
                        <img src={Link1} alt=""/>
                    </a>
                    <a href="">
                        <img src={Link2} alt=""/>
                    </a>
                    <a href="">
                        <img src={Link3} alt=""/>
                    </a>
                    <a href="">
                        <img src={Link4} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}