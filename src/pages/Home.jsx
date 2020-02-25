import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class Home extends PureComponent {
    render() {
        return (<div className="start-survey">
            <div className="side">
                <h1>Accelerate assessment</h1>
                <p>Application en cours de création. Cette page n'est pas encore disponible.</p>
            </div>
        </div>)
    }
};

export default withRouter(Home)
