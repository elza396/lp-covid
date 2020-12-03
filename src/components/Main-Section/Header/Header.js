import React from 'react';
import './Header.css';
import {ButtonWithBorder} from "../../ButtonWithBorder/ButtonWithBorder";
import {Logotype} from "../../Logo/Logo";
import ModalWindow from "../../ModalWindow/ModalWindow";


export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false}
    }


    render () {
    return (
        <header className="header">
            <Logotype />
            <div className="navigation">
                <a href={"#overview"}>Overview</a>
                <a href={"#contagion"}>Contagion</a>
                <a href={"#symptoms"}>Symptoms</a>
                <a href={"#prevention"}>Prevention</a>
                <ButtonWithBorder onClick={() => this.setState({isOpen: true})} text={"Contact"}/>
                {this.state.isOpen && <ModalWindow onClose={() => this.setState({isOpen: false})}/>}
            </div>
        </header>
        )

    }

}

