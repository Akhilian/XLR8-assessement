import React, { PureComponent, Fragment } from "react";
import Question from "../components/Question";
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import API from "../api";
import SwipeIcon from "../components/SwipeIcon";
import { Redirect, withRouter } from "react-router-dom";
import SessionService from "../services/SessionService";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class Survey extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      capabilities: [],
      respondent: null
    }
  }

  componentDidMount() {
    const api = new API()

    if(SessionService.isLoggedIn()) {
      this.setState({ respondent: SessionService.getRespondent() })

      api.getCapabilities().then((capabilities) => {
        this.setState({ capabilities })
      })
    }
  }

  goToNextQuestion = (index) => {
    this.setState({ index: index + 1 })
  }

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  }

  render() {
    const { index, respondent } = this.state;

    const isNotLoggedIn = !SessionService.isLoggedIn();
    if(isNotLoggedIn) {
      const { match } = this.props
      const { params } = match
      return (
          <Redirect to={'/start/' + params.surveyId} />
      )
    }

    return (
        <Fragment>
          <BindKeyboardSwipeableViews resistance enableMouseEvents index={index} onChangeIndex={this.handleChangeIndex}>
            {this.state.capabilities.map((capability, index) => (
                <Fragment key={index}>
                  <Question id={index} capability={capability} respondent={respondent} goToNextQuestion={() => this.goToNextQuestion(index)}/>
                  <SwipeIcon/>
                </Fragment>
            ))}
            <Fragment>
              <h1>Merci !</h1>
            </Fragment>
          </BindKeyboardSwipeableViews>
        </Fragment>
    )
  }
};

Survey.propTypes = {
};

export default withRouter(Survey)
