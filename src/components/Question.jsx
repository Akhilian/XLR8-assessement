import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import Capability from "../api/Capabilities";
import Respondent from "../api/Repondent";
import API from "../api";

export default class Question extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            response: null,
            isSavingAnswer: false
        }
    }


    handleOptionChange = (event) => {
        const { capability, respondent } = this.props
        const { response } = this.state
        const note = event.target.value

        this.setState({ isSavingAnswer: true })

        const api = new API()
        api.saveOrUpdateResponse({ respondent, capability, note, response })
            .then((response) => {
                this.setState({response, isSavingAnswer: false})
            })
    }

    render() {
        const { capability, id } = this.props
        const { response, isSavingAnswer } = this.state

        return (<div className="question-base">
            <div className="question">
                <div className={"question-category " + (response && !isSavingAnswer ? 'is-saved' : '') + " " + (isSavingAnswer ? 'is-loading' : '')}>
                    {(!isSavingAnswer) ? capability.category.name : ' '}
                </div>

                <div className="question-content">
                    <div className="question-asked">
                        <h2>{capability.name}</h2>
                    </div>
                    <div className="available-answers">
                        <div className="answer-option fully disagree">
                            <input type="radio" id={"question-" + id + "-level-0"} name={"question-" + id} value="0" onChange={this.handleOptionChange} />
                            <label htmlFor={"question-" + id + "-level-0"}></label>
                        </div>
                        <div className="answer-option relatively disagree">
                            <input type="radio" id={"question-" + id + "-level-1"} name={"question-" + id} value="1" onChange={this.handleOptionChange} />
                            <label htmlFor={"question-" + id + "-level-1"}></label>
                        </div>
                        <div className="answer-option slightly disagree">
                            <input type="radio" id={"question-" + id + "-level-2"} name={"question-" + id} value="2" onChange={this.handleOptionChange} />
                            <label htmlFor={"question-" + id + "-level-2"}></label>
                        </div>
                        <div className="answer-option neutral">
                            <input type="radio" id={"question-" + id + "-level-3"} name={"question-" + id} value="3" onChange={this.handleOptionChange} />
                            <label htmlFor={"question-" + id + "-level-3"}></label>
                        </div>
                        <div className="answer-option slightly agree">
                            <input type="radio" id={"question-" + id + "-level-4"} name={"question-" + id} value="4" onChange={this.handleOptionChange} />
                            <label htmlFor={"question-" + id + "-level-4"}></label>
                        </div>
                        <div className="answer-option relatively agree">
                            <input type="radio" id={"question-" + id + "-level-5"} name={"question-" + id} value="5" onChange={this.handleOptionChange} />
                            <label htmlFor={"question-" + id + "-level-5"}></label>
                        </div>
                        <div className="answer-option fully agree">
                            <input type="radio" id={"question-" + id + "-level-6"} name={"question-" + id} value="6" onChange={this.handleOptionChange} />
                            <label htmlFor={"question-" + id + "-level-6"}></label>
                        </div>
                    </div>
                    <div className="scale">
                        <div>Non</div>
                        <div>Oui</div>
                    </div>
                </div>
                {capability.description && (<div className="description">
                    {capability.description}
                </div>)}
            </div>
        </div>)
    }
}

Question.propTypes = {
    capability: PropTypes.instanceOf(Capability).isRequired,
    respondent: PropTypes.instanceOf(Respondent).isRequired,
    id: PropTypes.number.isRequired
};
