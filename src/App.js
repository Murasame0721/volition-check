import './App.css';
import MultipleControl from "./MultipleControl/MultipleControl";
import questions from "./MultipleControl/getQuestions";

function App() {
    return (<MultipleControl questionSet={questions}/>);
}

export default App;
