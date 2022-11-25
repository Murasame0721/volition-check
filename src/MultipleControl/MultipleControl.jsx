import React from "react";
import Multiple from "../Multiple/Multiple";
import Button from "@mui/material/Button";
import './MultipleControl.css';

export default class MultipleControl extends React.Component {
    constructor(props) {
        super(props);
        this.currentAnswer = 0;
        this.questionSet = props.questionSet;
        this.server = props.server;
    }

    server = {
        //when you want to submit your answer to server
        existence: false,
        serverURL: "http://localhost:3001",
        submitInterface: "/api/submit",
        withdrawInterface: "/api/withdraw",
    };
    privacyPolicy = () => {
        if (!this.server) {
            return "本网页没有发送信息到服务器的功能，请放心填写";
        }
        if (this.server.existence === false) {
            return "本网页没有发送信息到服务器的功能，请放心填写";
        }
        return "请放心，您的答案不会被记录到服务器，服务器只会记录您的分数"
    }
    questionSet = null;
    currentAnswer = 0;
    state = {
        currentQuestion: 0,
        currentAnswer: 0
    }
    listenSelfMark = (selfMark) => {
        this.setState({currentAnswer: selfMark});
    }
    finishQuestions = () => {
        //judge whether all questions are finished
        if (this.state.currentQuestion === this.props.questionSet.questionsMount - 1) {
            return "提交";
        } else {
            return "下一个问题";
        }
    }
    answerOrSubmit = () => {
        //switch to next question or submit
        this.questionSet.questions[this.state.currentQuestion].answerQuestion(this.state.currentAnswer);
        if (this.state.currentQuestion === this.props.questionSet.questionsMount - 1) {
            //waiting for achieve submit function
            console.log(this.questionSet.generateMarkObject());
        } else {
            this.setState({currentQuestion: this.state.currentQuestion + 1});
        }
    }

    render() {
        return (
            <div className="multipleController">
                <Multiple selfMarkCallback={this.listenSelfMark}
                          question={this.questionSet.questions[this.state.currentQuestion]}/>
                <div className={"pageController"}>
                    <Button variant="contained" size="large"
                            onClick={this.answerOrSubmit}>{this.finishQuestions()}</Button>
                </div>
                <p className="questionPointer">一共{this.questionSet.questionsMount}个问题，这是第{this.state.currentQuestion + 1}个问题</p>
                <p className="questionPointer">{this.privacyPolicy()}</p>
            </div>
        )
    }
}