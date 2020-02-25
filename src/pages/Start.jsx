import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { PureComponent } from "react";
import Respondent from "../api/Repondent";
import SessionService from "../services/SessionService";
import API from "../api";

class Start extends PureComponent {

    constructor(props) {
        super(props)
        const { match } = props
        const { params } = match

        this.state = {
            isRespondentLoggedIn: SessionService.isLoggedIn(),
            surveyId: params.surveyId
        }
    }

    onSuccess = (google) => {
        const respondent = Respondent.fromGoogleAPI(google)

        const api = new API()
        api.addRespondent(respondent).then((respondent) => {
            SessionService.saveSession(respondent)
            this.setState({ respondent })
        })

        this.setState({ isRespondentLoggedIn: true })
    }

    logOut = () => {
        SessionService.clearSession()
        this.setState({ isRespondentLoggedIn: false })
    }

    render() {
        const { isRespondentLoggedIn, surveyId } = this.state
        return (<div className="start-survey">
            <div className="side">
                <h1>Accelerate assessment</h1>
                <p>Les textes utilisés dans cette application sont issus du livre <q>ACCELERATE - The Science of Lean
                    Software and DevOps: Building and Scaling High Performing Technology Organizations</q></p>

                {
                    !isRespondentLoggedIn && (<div className="start-survey-authentication">
                        <GoogleLogin
                            clientId="546897476376-dhumi6k286pi4fkfcpm8c62ploi9da92.apps.googleusercontent.com"
                            buttonText="S'identifier avant de commencer"
                            onSuccess={this.onSuccess}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>)
                }

                {
                    isRespondentLoggedIn && (
                        <Fragment>
                            <Link className="start-survey-button" to={`/survey/${surveyId}`}>
                                Démarrer l'évaluation
                            </Link>
                            <button onClick={this.logOut}>
                                Logout
                            </button>
                        </Fragment>
                    )
                }

            </div>
        </div>)
    }
};

export default withRouter(Start)
