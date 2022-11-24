import logo from './logo.svg';
import './App.css';
import MultipleControl from "./MultipleControl/MultipleControl";

let questions = [
  "a very long question: fghujezhgijdsghfouqwdhfajoswcnipqodwbgbourwbdiousnapknx",
  "a very long question2: fghujezhgijdsghfouqwdhfajoswcnipqodwbgbourwbdiousnapknx"
]

function App() {
  return (<MultipleControl questions={questions}/>);
}

export default App;
