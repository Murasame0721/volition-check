import React from "react";
import {ToggleButtonGroup} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import './multiple.css';

export default class Multiple extends React.Component {
    question = null;
    selfMarkCallback = null;

    constructor(props) {
        super(props);
        this.question = props.question;
        this.selfMarkCallback = props.selfMarkCallback;
    }

    changeSelfMark = (event, newMark) => {
        this.setState({selfMark: newMark});
        if (this.props.selfMarkCallback) {
            this.props.selfMarkCallback(newMark);
        }
    }
    state = {
        selfMark: 0
    }

    render() {
        return (
            <div className="multiple">
                <div className="question">
                    <p>以下描述是否符合你？</p>
                    <p className="describe">4为最符合，1为最不符合</p>
                    <p>{this.props.question.describe}</p>
                </div>
                <div className="selector">
                    <ToggleButtonGroup color="primary" value={this.state.selfMark} onChange={this.changeSelfMark}
                                       size="large" exclusive
                                       aria-label="selfMark">
                        <ToggleButton value={0}>&nbsp;1&nbsp;</ToggleButton>
                        <ToggleButton value={1}>&nbsp;2&nbsp;</ToggleButton>
                        <ToggleButton value={2}>&nbsp;3&nbsp;</ToggleButton>
                        <ToggleButton value={3}>&nbsp;4&nbsp;</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        );
    }
}