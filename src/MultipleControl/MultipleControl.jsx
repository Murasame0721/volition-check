import React from "react";
import Button from "@mui/material/Button";
import './MultipleControl.css';
import HomePageOfQuestions from "../Multiple/HomePageOfQuestions";
import Multiple from "../Multiple/Multiple";
import EndPageOfQuestions from "../Multiple/EndPageOfQuestions";

const haveNotStarted = -1;
let usernameNode = null;
let username = "";

const getUsername = (inputNode) => {
    usernameNode = inputNode;
}

export default class MultipleControl extends React.Component {
    reportCard = null;

    constructor(props) {
        super(props);
        this.currentAnswer = 0; // waiting for achieve
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
    currentAnswer = 0;   //index of questions array

    state = {
        currentQuestion: haveNotStarted,
        currentAnswer: 0
    }
    listenSelfMark = (selfMark) => {
        this.setState({currentAnswer: selfMark});
    }
    finishQuestions = () => {
        //judge whether all questions are finished
        switch (this.state.currentQuestion) {
            case this.questionSet.questionsMount - 1:
                return "提交";
            case this.questionSet.questionsMount:
                return "问卷已完成，您可关闭网页";
            case haveNotStarted:
                return "开始回答";
            default:
                return "下一个问题";
        }
    }

    switchSpecialPage = (nowPage) => {
        switch (nowPage) {
            case haveNotStarted:
                return <HomePageOfQuestions getUsername={getUsername}/>;
            case this.props.questionSet.questionsMount:
                return <EndPageOfQuestions reportCard={this.reportCard}/>;
            default:
                return <Multiple selfMarkCallback={this.listenSelfMark}
                                 question={this.questionSet.questions[this.state.currentQuestion]}/>
        }
    }

    mainButtonOnClick = () => {
        //switch home page and questions
        switch (this.state.currentQuestion) {
            case haveNotStarted:
                //start answering
                username = usernameNode.value;
                if (!username) {
                    alert("请输入您的姓名");
                    return;
                }
                this.setState({currentQuestion: 0});
                return;
            case this.questionSet.questionsMount:
                alert("问卷已完成，您可关闭网页");
                //finish answering
                return;
            case this.questionSet.questionsMount - 1:
                //submit answer
                this.questionSet.questions[this.state.currentQuestion].answerQuestion(this.state.currentAnswer);
                this.reportCard = {
                    username: username,
                    marks: this.questionSet.generateMarkObject()
                }
                this.setState({currentQuestion: this.state.currentQuestion + 1});
                //waiting for achieve ajax
                break;
            default:
                //next question
                this.questionSet.questions[this.state.currentQuestion].answerQuestion(this.state.currentAnswer);
                this.setState({currentQuestion: this.state.currentQuestion + 1});
                break;
        }
    }

    render() {
        return (
            <div className="multipleController center">
                {this.switchSpecialPage(this.state.currentQuestion)}
                <div className={"pageController"}>
                    <Button variant="contained" size="large"
                            onClick={this.mainButtonOnClick}>{this.finishQuestions()}</Button>
                </div>
                <p className="littleTips">一共{this.questionSet.questionsMount}个问题，这是第{this.state.currentQuestion + 1}个问题</p>
                <p className="littleTips">{this.privacyPolicy()}</p>
            </div>
        )
    }
}