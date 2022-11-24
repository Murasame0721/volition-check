import questionsList from "../config/questionsList";
import question from "../libs/question";
import questionsSet from "../libs/questionSet";

const questions = new questionsSet(questionsList);
export default questions;