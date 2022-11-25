//import question from "./question";

export default class questionsSet {
    questions = [];   //class:question
    questionsMount = 0;
    weightDimensions = [];
    dimension = 0;
    minMark = [];
    maxMark = [];
    convertedFullMark = 100;
    convertedZeroMark = 0;
    conventFactor = [];
    conventOffset = [];
    conventedMark = [];

    conventMark() {
        for (let dimensionIndex = 0; dimensionIndex < this.dimension; dimensionIndex++) {
            let mark = 0;
            for (const question of this.questions) {
                mark += question.mark[dimensionIndex];
            }
            this.conventedMark[dimensionIndex] = (mark + this.conventOffset[dimensionIndex]) * this.conventFactor[dimensionIndex];
        }
        return this.conventedMark
    }

    generateMarkObject() {
        const finalMark = this.conventMark();
        const weightDimensions = this.weightDimensions;
        const markObject = {};
        for (let dimensionIndex = 0; dimensionIndex < this.dimension; dimensionIndex++) {
            markObject[weightDimensions[dimensionIndex]] = Math.round(finalMark[dimensionIndex]);
        }
        return markObject
    }

    constructor(questions) {
        this.questions = questions;
        this.weightDimensions = questions[0].weightDimensions;
        this.dimension = this.weightDimensions.length;
        this.questionsMount = questions.length;

        for (let dimensionIndex = 0; dimensionIndex < this.dimension; dimensionIndex++) {
            this.minMark[dimensionIndex] = 0;
            this.maxMark[dimensionIndex] = 0;
            for (const question of questions) {
                //calculate minMark and maxMark
                if (question.weight[dimensionIndex] <= 0) {
                    this.minMark[dimensionIndex] += question.weight[dimensionIndex] * 3;
                } else {
                    this.maxMark[dimensionIndex] += question.weight[dimensionIndex] * 3;
                }

                //calculate conventFactor and conventOffset
                this.conventFactor[dimensionIndex] = (this.convertedFullMark - this.convertedZeroMark) / (this.maxMark[dimensionIndex] - this.minMark[dimensionIndex]);
                this.conventOffset[dimensionIndex] = -1 * this.minMark[dimensionIndex];
            }
        }
    }
}