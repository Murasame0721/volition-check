import React from "react";
import Multiple from "../Multiple/Multiple";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default class MultipleControl extends React.Component {
    props = {
        questions: []
    }
    state = {
        answers: [],
        currentQuestion: 0
    }
    finishQuestions = () => {
        if (this.state.currentQuestion === this.props.questions.length - 1) {
            return "提交";
        } else {
            return "下一个问题";
        }
    }

    render() {
        return (
            <>
                <Multiple question={this.props.questions[this.state.currentQuestion]}/>
                <div className={"pageController"}>
                    <Button variant="contained" size="large">{this.finishQuestions()}</Button>
                </div>
            </>
        )
    }
}