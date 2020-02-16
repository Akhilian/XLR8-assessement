import React from "react";
import { Link } from "react-router-dom";

const Start = props => {
    return (
        <div className="start-survey">
            <h1>Accelerate assessment</h1>
            <p>Les textes utilisés dans cette application sont issus du livre <q>ACCELERATE - The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations</q></p>

            <Link className="start-survey-button" to="/survey">
                Démarrer l'évaluation
            </Link>
        </div>
    )
};

export default Start