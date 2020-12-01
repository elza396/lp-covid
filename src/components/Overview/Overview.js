import React from 'react';
import './Overview.css';
import {Button} from "../Button/Button";
import OverviewImg from "../../resources/overview.svg";


export function Overview() {
    return (
        <div className="overview">
            <div className="overview_section" id="overview">
                <img src={OverviewImg} alt=""/>
                <div className="overview__content">
                    <p className="title">What Is Covid-19</p>
                    <p className="subtitle">Coronavirus</p>
                    <p className="text">Corona viruses are a type of virus. There are many different kinds, and
                        <br/> some cause disease. A newly identified type has caused a recent
                        <br/> outbreak of respiratory illness now called COVID-19.Lauren Sauer, M.S.,
                        <br/> the director of operations with the Johns Hopkins Office of Critical Event
                        <br/> Preparedness and Response</p>
                    <div className="overview__button">
                        <Button text={"Learn More"} />
                    </div>
                </div>
            </div>
        </div>
    )
}