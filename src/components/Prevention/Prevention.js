import React from 'react';
import './Prevention.css';
import Prevention1 from "../../resources/Prevention1.svg";
import Prevention2 from "../../resources/Prevention2.svg";
import Prevention3 from "../../resources/Prevention3.svg";
import Prevention4 from "../../resources/Prevention4.svg";

export function Prevention() {
    return (
        <div className="prevention">
            <div className="prevention_section" id="prevention">
                <div className="prevention__content">
                    <p className="title">Covid-19</p>
                    <p className="subtitle">What should we do</p>
                    <p className="text">Corona viruses are a type of virus. There are many different kinds, and some cause <br/> disease. A newly identified type has caused</p>
                    <div className="prevention1">
                        <div className="prevention1__content">
                            <div className="prevention__content__line1">
                                <p className="prevention__content__number">01</p>
                                <p className="prevention__content__title">wear masks</p>
                            </div>
                            <div className="prevention__content__line2">
                                <p>Continually seize impactful vortals rather than future-proof supply <br/>
                                    chains. Uniquely exploit emerging niches via fully tested <br/>
                                    meta-services. Competently pursue standards compliant leadership <br/>
                                    skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        <img src={Prevention1} alt="" />
                    </div>
                    <div className="prevention2">
                        <img src={Prevention2} alt="" />
                        <div className="prevention2__content">
                            <div className="prevention__content__line1">
                                <p className="prevention__content__number">02</p>
                                <p className="prevention__content__title">Wash Your Hands</p>
                            </div>
                            <div className="prevention__content__line2">
                                <p>Continually seize impactful vortals rather than future-proof <br/>
                                    supply chains. Uniquely exploit emerging niches via fully  <br/>
                                    tested meta-services. Competently pursue standards  <br/>
                                    compliant leadership skills vis-a-vis pandemic "outside the <br/>
                                    box" thinking. Objectively Continually seize impactful vortals </p>
                            </div>
                        </div>
                    </div>
                    <div className="prevention2">
                        <div className="prevention1__content">
                            <div className="prevention__content__line1">
                                <p className="prevention__content__number">03</p>
                                <p className="prevention__content__title">Use nose -  rag</p>
                            </div>
                            <div className="prevention__content__line2">
                                <p>Continually seize impactful vortals rather than future-proof supply  <br/>
                                    chains. Uniquely exploit emerging niches via fully tested  <br/>
                                    meta-services. Competently pursue standards compliant leadership  <br/>
                                    skills vis-a-vis pandemic "outside the box" thinking. Objectively </p>
                            </div>
                        </div>
                        <img src={Prevention3} alt="" />
                    </div>
                    <div className="prevention2">
                        <img src={Prevention4} alt="" />
                        <div className="prevention2__content">
                            <div className="prevention__content__line1">
                                <p className="prevention__content__number">04</p>
                                <p className="prevention__content__title">Avoid contacts</p>
                            </div>
                            <div className="prevention__content__line2">
                                <p>Continually seize impactful vortals rather than future-proof <br/>
                                    supply chains. Uniquely exploit emerging niches via fully  <br/>
                                    tested meta-services. Competently pursue standards  <br/>
                                    compliant leadership skills vis-a-vis pandemic "outside the <br/>
                                    box" thinking. Objectively Continually seize impactful vortals </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}