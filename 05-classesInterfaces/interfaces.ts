interface Named { // not the same as custom type, works only for objects
  readonly name: string; // makes sure that whatever implements this, cant reassign this prop
  outputName?: string; // optional prop, also works on classes
}

interface Greetable extends Named{  // extend interfaces to inherit "rules" from parent (an extend multiple)
  greet(message: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(message: string) {
    console.log(message + this.name);
  }
}

let user1: Greetable; // As Person class implements Greetable, user 1 can be an instance of Person

user1 = new Person('Naty', 30); 

user1.greet('Hello, my name is ');

console.log(user1);

// Interface as Fn Types:

// type AddFn = (n1: number, n2: number) => number;

interface AddFn {
  (n1: number, n2: number): number;
}

let add: AddFn;

add = (a: number, b: number) => {
 return a + b;
}

export {}