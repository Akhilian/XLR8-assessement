import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { PureComponent } from "react";
import Respondent from "../api/Repondent";
import SessionService from "../services/SessionService";

class Start extends PureComponent {

    onSuccess(google) {
        const respondent = Respondent.fromGoogleAPI(google)
        SessionService.saveSession(respondent)
    }

    responseGoogle(result) {
        console.log(result)
    }

    render() {

        const isRespondentLoggedIn = SessionService.isLoggedIn()
        console.log(isRespondentLoggedIn)

        return (<div className="start-survey">
            <div className="side">
                <h1>Accelerate assessment</h1>
                <p>Les textes utilisés dans cette application sont issus du livre <q>ACCELERATE - The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations</q></p>



                {
                    isRespondentLoggedIn && (<div className="start-survey-authentication">
                        <GoogleLogin
                            clientId="546897476376-dhumi6k286pi4fkfcpm8c62ploi9da92.apps.googleusercontent.com"
                            buttonText="S'identifier avant de commencer"
                            onSuccess={this.onSuccess}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>)
                }

                {
                    !isRespondentLoggedIn && (<Link className="start-survey-button" to="/survey">
                        Démarrer l'évaluation
                </Link>)
                }

            </div>
        </div>)
    }
};

export default Start