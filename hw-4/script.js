class Calculator {
    constructor(x, y) {
        if (!Calculator.isValidNumber(x) || !Calculator.isValidNumber(y)) {
            throw new Error('Invalid numbers provided');
        }

        this.x = x;
        this.y = y;

        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
    }

    static isValidNumber(value) {
        return typeof value === 'number' && Number.isFinite(value) && !Number.isNaN(value);
    }

    setX(value) {
        if (!Calculator.isValidNumber(value)) {
            throw new Error('Invalid number provided');
        }

        this.x = value;
    }

    setY(value) {
        if (!Calculator.isValidNumber(value)) {
            throw new Error('Invalid number provided');
        }
        
        this.y = value;
    }

    logSum() {
        return this.x + this.y;
    }

    logMul() {
        return this.x * this.y;
    }

    logSub() {
        return this.x - this.y;
    }

    logDiv() {
        if(this.y === 0) {
            throw new Error('Division by zero');
        }

        return this.x / this.y;
    }
}

const calculator = new Calculator(10, 5);

const logSumRef = calculator.logSum;
const logMulRef = calculator.logMul;
const logSubRef = calculator.logSub;
const logDivRef = calculator.logDiv;

console.log(logSumRef()); // Output: 15
console.log(logMulRef()); // Output: 50
console.log(logSubRef()); // Output: 5
console.log(logDivRef()); // Output: 2

calculator.setX(15);
calculator.setY(4);

console.log(logDivRef()); // Output: 3.75

// calculator.setY(0);
// console.log(logDivRef()); // Error!