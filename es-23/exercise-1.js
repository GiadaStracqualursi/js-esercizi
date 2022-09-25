const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}


const keys = Object.keys(person);


for (let i = 0; i < keys.length; i++){
  console.log(`${keys[i]}: ${person[keys[i]]}`);
}

// Print values of person using Object.keys