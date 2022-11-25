import "./multiple.css"
import {List, ListItemText} from "@mui/material";
import {ListItem} from "@mui/material";

function EndPageOfQuestions(props) {

    const reportCard = props.reportCard;
    const marksDetail = reportCard.marks;
    const marksDisplay = [];
    for (const key in marksDetail) {
        marksDisplay.push(
            <ListItem key={key}>
                <ListItemText primary={`${key}：${marksDetail[key]}`}/>
            </ListItem>
        );
    }
    return (
        <div className="multiple">
            <p>{reportCard.username}，您的得分如下：</p>
            <List sx={{width: '80%', maxWidth: 400, bgcolor: 'background.paper'}}>
                {marksDisplay}
            </List>
        </div>
    )
}

export default EndPageOfQuestions