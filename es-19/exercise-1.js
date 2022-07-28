const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon';

//Perchè l'oggetto person1 contiene "firstName" 
//che viene riassegnato in person2 ed essendo l'ultima assegnazione 
//è quella letta da js e automaticamente restituita

console.log(person1);
console.log(person2);