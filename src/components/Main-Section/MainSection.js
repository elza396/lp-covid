import React from 'react';
import './MainSection.css';
import {Header} from "./Header/Header";
import {ButtonFill} from "../ButtonFill/ButtonFill";
import Girl from "../../resources/main_section.svg";
import ModalWindow from "../ModalWindow/ModalWindow";

export class MainSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    render() {
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
                                <ButtonFill text={"Let Us Help"} onClick={() => this.setState({isOpen: true})}/>
                                {this.state.isOpen && <ModalWindow onClose={() => this.setState({isOpen: false})}/>}
                            </div>
                        </div>
                        <img src={Girl} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
