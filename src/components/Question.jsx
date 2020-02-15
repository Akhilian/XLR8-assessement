import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

export default class Question extends PureComponent {
    render() {
        console.log(this.props)
        const { question, id } = this.props

        return (<div className="question">
            <div className="question-content">
                <div className="question-asked">
                    <h2>{question}</h2>
                </div>
                <div className="available-answers">
                    <div className="answer-option">
                        <input type="radio" id={"question-" + id + "-level-0"} name={"question-" + id} value="0" />
                        <label htmlFor={"question-" + id + "-level-0"}></label>
                    </div>
                    <div className="answer-option">
                        <input type="radio" id={"question-" + id + "-level-1"} name={"question-" + id} value="1" />
                        <label htmlFor={"question-" + id + "-level-1"}></label>
                    </div>
                    <div className="answer-option">
                        <input type="radio" id={"question-" + id + "-level-2"} name={"question-" + id} value="2" />
                        <label htmlFor={"question-" + id + "-level-2"}></label>
                    </div>
                    <div className="answer-option">
                        <input type="radio" id={"question-" + id + "-level-3"} name={"question-" + id} value="3" />
                        <label htmlFor={"question-" + id + "-level-3"}></label>
                    </div>
                    <div className="answer-option">

                        <input type="radio" id={"question-" + id + "-level-4"} name={"question-" + id} value="4" />
                        <label htmlFor={"question-" + id + "-level-4"}></label>
                    </div>
                    <div className="answer-option">
                        <input type="radio" id={"question-" + id + "-level-5"} name={"question-" + id} value="5" />
                        <label htmlFor={"question-" + id + "-level-5"}></label>
                    </div>
                    <div className="answer-option">
                        <input type="radio" id={"question-" + id + "-level-6"} name={"question-" + id} value="6" />
                        <label htmlFor={"question-" + id + "-level-6"}></label>
                    </div>
                </div>
                <div className="scale">
                    <div>Non</div>
                    <div>Oui</div>
                </div>
            </div>
            <div className="description">
            « Version control is the use of a version control system, such as GitHub or Subversion, for all production artifacts, including application code, application configurations, system configurations, and scripts for automating build and configuration of the environment. »
            </div>
        </div>)
    }
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};