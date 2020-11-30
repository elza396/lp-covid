import React from 'react';
import './Question.css';
import {Button2} from "../../Button2/Button2";

export function Question() {
    return (
        <div className="question_section">
            <div className="question_content">
                <p>Have Question in mind? <br/> Let us help you</p>
                <form className="question__form" action="mailto:elza396@yandex.ru">
                    <input type="text" placeholder="snmonydemo@gmail.com"/>
                    <Button2 text={"Send"}/>
                </form>
            </div>
        </div>
    )
}