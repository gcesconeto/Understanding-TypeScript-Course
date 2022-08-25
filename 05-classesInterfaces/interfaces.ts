interface Greetable {  // not the same as custom type, works only for objects
  name: string;

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
    console.log(message + this.name)
  }
}

let user1: Greetable; // As Person class implements Greetable, user 1 can be an instance of Person

user1 = new Person('Naty', 30); 

user1.greet('Hello, my name is ');