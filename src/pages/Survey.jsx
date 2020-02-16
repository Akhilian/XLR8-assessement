import React, { PureComponent, Fragment } from "react";
import Question from "../components/Question";
import SwipeableViews from 'react-swipeable-views';
import API from "../api";
import SwipeIcon from "../components/SwipeIcon";

export default class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            capabilities: [],
            respondent: null
        }
    }

    componentDidMount() {
        const api = new API()

        api.addRespondent({}).then((respondent) => {
            this.setState({ respondent })
        })

        api.getCapabilities().then((capabilities) => {
            this.setState({ capabilities })
        })
    }

    handleChangeIndex = (index) => {
        this.setState({
            index,
        });
    }

    render() {
        const { index, respondent } = this.state;
        return (
            <Fragment>
                <SwipeableViews resistance enableMouseEvents index={index} onChangeIndex={this.handleChangeIndex}>
                    {this.state.capabilities.map((capability, index) => (
                        <Fragment key={index}>
                            <Question id={index} capability={capability} respondent={respondent} />
                            <SwipeIcon />
                        </Fragment>
                    ))}
                </SwipeableViews>
            </Fragment>
        )
    }
}