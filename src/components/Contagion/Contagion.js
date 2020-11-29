import React from 'react';
import './Contagion.css';
import {ContagionCard} from "./ContaginCard/ContagionCard";
import Card1 from "../../resources/contagionCard1.svg";
import Card2 from "../../resources/contagionCard2.svg";
import Card3 from "../../resources/contagionCard3.svg";

export function Contagion() {
    return (
        <div className="contagion_section">
            <div className="contagion__content">
                <p className="title">Covid-19</p>
                <p className="subtitle">Contagion</p>
                <p className="text">Corona viruses are a type of virus. There are many different kinds, and <br/> some cause disease. A newly identified type</p>
                <div className="contagion__cards">
                    <ContagionCard img={Card1} title={"Air Transmission"}>Objectively evolve tactical expertise before <br/> extensible initiatives. Efficiently simplify</ContagionCard>
                    <ContagionCard img={Card2} title={"Human Contacts"}>Washing your hands is one of the simplest <br/> ways you can protect</ContagionCard>
                    <ContagionCard img={Card3} title={"Containted Objects"}>Use the tissue while sneezing,In this way, you <br/> can protect your droplets.</ContagionCard>
                </div>
            </div>
        </div>
    )
}
