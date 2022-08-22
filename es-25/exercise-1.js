
const person = {
 
get getfirstName(){
    return firstName;
},

set setfirstName(value){
    this.firstName = value;
},
get getlastName(){
    return lastName;
},

set setlastName(value){
   this.lastName = value;
},

fullName(){
   
    return `${this.firstName} ${this.lastName}`;
}
}


const simon = Object.create(person)
simon.firstName= "Simon",
simon.lastName= "Rossi"


const john = Object.create(person)
john.firstName= "John",
john.lastName="Doe"


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins