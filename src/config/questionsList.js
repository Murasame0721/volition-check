import question from "../libs/question";

/** Use "new question(describe, weightDimensions, weight)" to create a question object.
 * if your question is reverse scoring, you should add a "reverse" prop after weight prop
 * fix all the questions object into array questionsList.
 * you can set this according to weightDimensionsExample and questionsListExample
 * */

const weightDimensions = ["human", "robot"];
const questionsList = [
    new question("Are you a human?", weightDimensions, [1, 0]),
    new question("Are you a robot?", weightDimensions, [0, 1]),
];

export default questionsList;

//the following are examples
const weightDimensionsExample = ["human", "robot"];
const questionsListExample = [
    new question("Are you a human?", weightDimensionsExample, [1, 0]),
    new question("Are you a robot?", weightDimensionsExample, [0, 1]),
];