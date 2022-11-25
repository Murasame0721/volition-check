export default class question {
    describe = "";
    weightDimensions = [];
    dimension = 0;
    weight = [];
    answer = 0;
    reverse = false;
    mark = []

    constructor(describe, weightDimensions, weight, isReverse) {
        this.describe = describe;
        this.weightDimensions = weightDimensions;
        this.weight = weight;
        this.dimension = weightDimensions.length;
        if (isReverse === "reverse") this.reverse = true;
    }

    answerQuestion(answer) {
        this.answer = answer;
        for (let dimensionsIndex = 0; dimensionsIndex < this.dimension; dimensionsIndex++) {
            this.mark[dimensionsIndex] = this.weight[dimensionsIndex] * this.answer;
        }
    }
}