const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

for (key in person) {
  if (typeof person[key] === 'string') {
    person[key] = undefined
  }
}

const json = JSON.stringify(person);

console.log(json);