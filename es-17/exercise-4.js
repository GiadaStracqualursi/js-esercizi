function calculate() {
  let result = 0;

  let calculator = {
    add: function (Number) {
      result += Number;
      return this;
    },

    multiply: function (Number) {
      result *= Number;
      return this;

    },

    sub: function (Number) {
      result -= Number;
      return this;


    },

    divide: function (Number) {
      result /= Number;
      return this;
    },
    printResult: function () {
      return result;
    }

  }

  return calculator;

}

const calculator = calculate();
const result=calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult();
console.log (result);