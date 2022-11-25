import './multiple.css';
import TextField from "@mui/material/TextField";

function HomePageOfQuestions(props) {
    const getUsername = props.getUsername;
    return (
        <div className="multiple">
            <div className="question">
                <p>这是一个心理学问卷，您需要判断我们给出的描述是否符合您</p>
            </div>
            <TextField inputRef={getUsername} required id="userName" label="您的姓名"
                       helperText="姓名仅作区分，您不需要填写真实姓名" variant="outlined"/>
        </div>
    )
}

export default HomePageOfQuestions;