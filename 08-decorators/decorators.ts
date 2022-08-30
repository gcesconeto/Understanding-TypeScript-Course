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

// Useful Decorators

function WithTemplate(template: string, hookId: string) { // does more advanced things
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent += p.name
    }
  }
}

// Multiple Decorators

@LoggerFactory('Logging')                          // The factory executes top to botton, 
@WithTemplate('<h1>Inner HTML replacer</h1>', 'app')  // the decorators bottom to top
class Person3 {
  name = 'Greg';

  constructor() {
    console.log('Creating person object...');
  }
};

