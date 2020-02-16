import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";

const Start = props => {
    return (
        <div className="start-survey">
            <img src="./programing.svg" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis laoreet posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <Link className="start-survey-button" to="/survey">
                Démarrer le sondage
            </Link>
        </div>
    )
};

export default Start