import React, { PureComponent, Fragment } from "react";
import Question from "../components/Question";
import SurveyProgress from "../components/SurveyProgress";

export default class Survey extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            questions: [
                "Use version control for all production artifacts",
                "Automate your deployment process",
                "Implement continuous integration.",
                "Use trunk-based development methods.",
                "Implement test automation.",
                "Support test data management. ",
                "Shift left on security.",
                "Implement continuous delivery (CD)",
                "Use a loosely coupled architecture.",
                "Architect for empowered teams.",
                "Gather and implement customer feedback",
                "Make the flow of work visible through the value stream.",
                "Work in small batches.",
                "Foster and enable team experimentation.",
                "Have a lightweight change approval processes.",
                "Monitor across application and infrastructure to inform business decisions.",
                "Check system health proactively.",
                "Improve processes and manage work with work-in-process (WIP) limits.",
                "Visualize work to monitor quality and communicate throughout the team.",
                "Support a generative culture (as outlined by Westrum)",
                "Encourage and support learning. ",
                "Support and facilitate collaboration among teams.",
                "Provide resources and tools that make work meaningful.",
                "Support or embody transformational leadership.",
            ]
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.questions.map((question, index) => (
                    <Question id={index} question={question} />
                ))}
                <SurveyProgress />
            </Fragment>
        )
    }
}