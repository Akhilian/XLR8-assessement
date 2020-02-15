import React, { PureComponent } from "react";

export default class SurveyProgress extends PureComponent {
    render() {
        return (
            <div className="survey-progress">
                <div className="progress-container">
                    <div className="progression-bar">
                        <div className="progression" style={{width: "40%"}} />
                    </div>
                </div>
            </div>
        )
    }
}