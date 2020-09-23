class Calculator{
  constructor() {
    this.result = 0;
  }

  addNumber(num) {
    this.result = this.result + num;
    return this;
  }

  multiplyNumber(num) {
    this.result = this.result * num;
    return this;
  }

  minusNumber(num) {
    this.result = this.result - num;
    return this;
  }

  divideNumber(num) {
    this.result = this.result / num;
    return this;
  }
}

const calc = new Calculator();

calc
  .addNumber(5)
  .minusNumber(2)
  .multiplyNumber(3)
  .divideNumber(2)
  .addNumber(10)

console.log(calc.result);