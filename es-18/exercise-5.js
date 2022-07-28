function memoize(fn) {
  let cache = {};
  return function memo(numero) {
    if (cache[numero]) {
      return cache[numero]
    }

    else {
      let newfact = fn(numero)
      cache[numero] = newfact;
      return newfact

    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);

  return memoize
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));