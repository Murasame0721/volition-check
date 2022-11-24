import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import {ToggleButtonGroup} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import './multiple.css';

export default class Multiple extends React.Component {
    props = {
        question: "question"
    }
    changeSelfMark = (event, newMark) => {
        this.setState({selfMark: newMark});
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
                    <p>{this.props.question}</p>
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