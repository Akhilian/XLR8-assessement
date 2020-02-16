import React, { PureComponent, Fragment } from "react";
import Question from "../components/Question";
import SurveyProgress from "../components/SurveyProgress";
import SwipeableViews from 'react-swipeable-views';
import API from "../api";

export default class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            capabilities: []
        }
    }

    componentDidMount() {
        const api = new API()
        api.getCapabilities().then((capabilities) => {
            console.log(capabilities)
            this.setState({ capabilities })
        })
    }

    handleChangeIndex = (index) => {
        this.setState({
            index,
        });
    }

    render() {
        const { index } = this.state;
        return (
            <Fragment>
                <SwipeableViews resistance enableMouseEvents index={index} onChangeIndex={this.handleChangeIndex}>
                    {this.state.capabilities.map((capability, index) => (
                        <Question id={index} key={index} capability={capability} />
                    ))}
                    {/* <SurveyProgress /> */}
                </SwipeableViews>
            </Fragment>
        )
    }
}