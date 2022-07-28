function pow(base) {

  return function (esponente) {
    return Math.pow(base, esponente)
  }


}

const pow2 = pow(2);
const pow5 = pow(5);

console.log(Math.pow(5, 2));
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log(Math.pow(2, 5));
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));