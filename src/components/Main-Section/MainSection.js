import React from 'react';
import './MainSection.css';
import {Header} from "./Header/Header";
import {Button2} from "../Button2/Button2";
import Girl from "../../resources/main_section.svg";

export function MainSection() {
    return (
        <div className="mainBG">
            <div className="main_section">
                <Header />
                <div className="main_section__container">
                    <div className="main_section__content">
                        <p className="title">COVID-19 Alert</p>
                        <p className="subtitle">Stay at Home quarantine <br/> To stop Corona virus</p>
                        <p className="text">There is no specific medicine to prevent or treat coronavirus <br/> disease (COVID-19). People may need supportive care to</p>
                        <div className="main_section__button">
                            <Button2 text={"Let Us Help"}/>
                        </div>
                    </div>
                    <img src={Girl} alt=""/>
                </div>
            </div>
        </div>
    )
}