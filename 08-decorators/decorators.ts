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

// Decorator targets

function Log(target: any, propName: string | Symbol) { // decorator for a class prop
  console.log('Prop Decorator');
  console.log(target, propName);
}

function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log(target, name, descriptor);   // accessor decorators can return a change to descriptor
}

function LogMethod(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method Decorator');
  console.log(target, name, descriptor);   // method decorators can return a change to descriptor
}

function LogParameter(target: any, name: string, position: number) {
  console.log('Parameter Decorator');
  console.log(target, name, position);
}

class Product {
  @Log                // executes when class is declared
  title: string;
  private _price: number;
  @LogAccessor
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error('Invalid price');
  }

  constructor (t: string, p: number){
    this.title = t;
    this._price = p;
  }
  @LogMethod
  getPrixeWithTax(@LogParameter tax: number) {
    return this._price * (1 + tax);
  }
}

// Changing original class with decorators

function ClassChanger(template: string, hookId: string) { 
  return function<T extends { new(...args: any[]): {name: string}}>(ogConstructor: T) {
    return class extends ogConstructor {  // returns new class with constructor logic "injected"
      constructor(..._: any[]) {          // into it, now making the logic run only at intantiation time
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent += this.name;
        }
      }
    }
  }
}


@ClassChanger('<h1>Inner HTML replacer</h1>', 'app') // now the decorator effects will only happen when instantiating
class Person4 {
  name = 'Greg';

  constructor() {
    console.log('Creating person object...');
  }
};

// Autobind decorator

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const ogMethod = descriptor.value
  const boundDescriptor: PropertyDescriptor = { // creates a new descriptor with extra logic
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = ogMethod.bind(this); // binds this from og object to the get() function
      return boundFn;
    }
  }
  return boundDescriptor; // returns modified descriptor
}


class Printer {
  message = 'This works';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector('button')!
button.addEventListener('click', printer.showMessage) // this doesnt work because the this.message refers to another "this"
button.addEventListener('click', printer.showMessage.bind(printer)) // this is a workaround that binds the corrent environment (printer) to the method 