function getKeys(obj) {
let chiavi=[];
for (let i = 0; i < Object.keys(person).length; i++){
  chiavi.push( Object.keys(person)[i])
}
return chiavi
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);