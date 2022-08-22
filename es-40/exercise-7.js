class Person {
  constructor(firstName, lastName, age){

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


get FirstName(){
      return this.firstName;
  }

  set FirstName(firstName){
      this.firstName = firstName;
  }
  get LastName(){
      return this.lastName;
  }
  
  set LastName(firstName){
     this.lastName = lastName;
  }

  get Age(){
    return this.age;
  }

  set Age(age){
    this.age = age;
  }
  
  get fullName(){
     
      return `${this.firstName} ${this.lastName} ${this.age}`;
  }
}

  

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);