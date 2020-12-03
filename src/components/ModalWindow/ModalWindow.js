import React from 'react';
import './ModalWindow.css';

export default class ModalWindow extends React.Component {

    render () {
        return (
            <div className="modal" onClick={this.props.onClose}>
                <div className="modal_window" onClick={e => e.stopPropagation()}>
                    <div className="modal_window__header">
                        <span>Give information about you</span>
                        <button onClick={() => this.props.onClose()} className="modal_window__header__button">Close</button>
                    </div>
                    <form className="modal_window__form">
                        <input type="text" placeholder={"Your name"} className="modal_window__input__name"/>
                        <input type="text" placeholder={"Give your number"} className="modal_window__input__number"/>
                        <input type="email" placeholder={"E-mail"} className="modal_window__input__email"/>
                        <button className="modal_window__form__button">Submit</button>
                    </form>
                </div>
                <div className="modal__shadow" />
            </div>
        )
    }
}