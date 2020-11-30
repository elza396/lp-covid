import React from 'react';
import './Statistics.css';
import Map from "../../resources/Map.svg";
import {Country} from "./Country/Country";
import USA from "../../resources/USA.svg";
import Spain from "../../resources/Spain.svg";
import Iran from "../../resources/Iran.svg";
import China from "../../resources/China.svg";
import Germany from "../../resources/Germany.svg";
import Italy from "../../resources/Italy.svg";

export function Statistics() {
    return (
        <div className="statistics_section">
            <div className="statistics_content">
                <div className="statistics__map">
                    <img src={Map} alt=""/>
                </div>
                <div className="statistics__reports">
                    <div className="statistics__reports__content">
                        <p>Live Reports</p>
                        <table>
                            <Country img={USA} country={"The USA"} number={"45678"} />
                            <Country img={Italy} country={"Italy"} number={"2345"} />
                            <Country img={Spain} country={"Spain"} number={"456"} />
                            <Country img={Iran} country={"Iran"} number={"454"} />
                            <Country img={Germany} country={"Germany"} number={"233"} />
                            <Country img={China} country={"China"} number={"34"} />
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}