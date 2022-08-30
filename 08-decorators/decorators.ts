// Decorators

function Logger(constructor: Function) { // Function receives the class function as argument
  console.log('Logging...');
  console.log(constructor);
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

// Decorator factories

function LoggerFactory(logString: string) { // Returns a custom decorator function
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@LoggerFactory('Logging Person')  // receives a customized decorator function
class Person2 {
  name = 'Greg';

  constructor() {
    console.log('Creating person object...');
  }
};

