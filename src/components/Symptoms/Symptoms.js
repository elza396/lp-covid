import React from 'react';
import './Symptoms.css';
import Girl from "../../resources/SymptomsGirl.svg";
import {Symptom} from "./Symptom/Symptom";
import circleLine from "../../resources/circleLine.svg";
import circleLine2 from "../../resources/circleLine2.svg";


export function Symptoms() {
    return (
        <div className="symptoms_section">
            <div className="symptoms__content">
                <p className="title">Covid-19</p>
                <p className="subtitle">Symptoms</p>
                <p className="text">Corona viruses are a type of virus. There are many different kinds, and some cause disease. <br/> A newly identified type has caused a recent outbreak of respiratory </p>
                <div className="symptoms__scheme">
                    <img src={Girl} alt="" />
                    <div className="symptom1">
                        <Symptom>Fever</Symptom>
                        <img className="symptom__circle__line1" src={circleLine} alt=""/>
                    </div>
                    <div className="symptom2">
                        <Symptom>throat <br/> pain</Symptom>
                        <img className="symptom__circle__line2" src={circleLine2} alt=""/>
                    </div>
                    <div className="symptom3">
                        <Symptom>dypsnoea</Symptom>
                        <img className="symptom__circle__line1" src={circleLine} alt=""/>
                    </div>
                    <div className="symptom4">
                        <Symptom>Headache</Symptom>
                        <img className="symptom__circle__line2" src={circleLine2} alt=""/>
                    </div>
                    <div className="symptom5">
                        <Symptom>runny <br/> nose</Symptom>
                        <img className="symptom__circle__line1" src={circleLine} alt=""/>
                    </div>
                    <div className="symptom6">
                        <Symptom>shaking <br/> chills</Symptom>
                        <img className="symptom__circle__line2" src={circleLine2} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    )
}
