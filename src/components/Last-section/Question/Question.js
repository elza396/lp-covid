import React from 'react';
import './Question.css';
import {ButtonFill} from "../../ButtonFill/ButtonFill";

export function Question() {
    return (
        <div className="question_section">
            <div className="question_content">
                <p>Have Question in mind? <br/> Let us help you</p>
                <form className="question__form" action="mailto:elza396@yandex.ru">
                    <input type="text" placeholder="snmonydemo@gmail.com"/>
                    <ButtonFill text={"Send"}/>
                </form>
            </div>
        </div>
    )
}