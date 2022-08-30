// Decorators

function Logger(contructor: Function) { // Function receives the class function as argument
  console.log('Logging...');
  console.log(contructor);
}

@Logger  // Runs before the class is declared, NOT instantiated. 
class Person {
  name = 'Greg';

  constructor() {
    console.log('Creating person object...');
  }
};

const person = new Person();

console.log(person);