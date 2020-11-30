import React from 'react';
import './Last-section.css';
import {Statistics} from "./Statistics/Statistics";
import {Question} from "./Question/Question";
import {Footer} from "./Footer/Footer";

export function LastSection() {
    return (
        <div className="last_section">
            <Statistics />
            <Question />
            <Footer />
        </div>
    )
}