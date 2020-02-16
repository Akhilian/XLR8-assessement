import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import Capability from "../api/Capabilities";

export default class Question extends PureComponent {
    render() {
        const { capability, id } = this.props

        return (<div className="question-base">
            <div className="question">
                <div className="question-category">
                    Continuous delivery
                </div>

                <div className="question-content">
                    <div className="question-asked">
                        <h2>{capability.name}</h2>
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
                {capability.description && (<div className="description">
                    {capability.description}
                </div>)}
            </div>
        </div>)
    }
}

Question.propTypes = {
    capability: PropTypes.instanceOf(Capability).isRequired,
    id: PropTypes.number.isRequired
};