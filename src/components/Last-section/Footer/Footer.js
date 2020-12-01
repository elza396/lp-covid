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
                <a href={"#overview"}>Overview</a>
                <a href={"#contagion"}>Contagion</a>
                <a href={"#symptoms"}>Symptoms</a>
                <a href={"#prevention"}>Prevention</a>
            </div>
            <div>
                <div className="navigation">
                    <a href={"www.facebook.com"}>
                        <img src={Link1} alt=""/>
                    </a>
                    <a href={"www.youtube.com"}>
                        <img src={Link2} alt=""/>
                    </a>
                    <a href={"www.vimeo.com"}>
                        <img src={Link3} alt=""/>
                    </a>
                    <a href={"www.twitter.com"}>
                        <img src={Link4} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}