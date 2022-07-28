function sumUntil(maxValue) {
  let risultato = 0;
  for (let i = 0; i <= maxValue; i++){

    risultato = risultato + i;
  }

  return risultato

}

console.log(sumUntil(5));