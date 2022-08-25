class Department {
  name: string;

  constructor(n: string) {
    this.name = n
  }

  describe() {
    console.log(`The name of this department is: ${this.name}`);
  }

  describeThis(this: Department) {
    console.log(`The name of this department is: ${this.name}`);
  }
}

const accounting = new Department('Accounting'); // creates instance with Accounting for 'name'

console.log(accounting);

accounting.describe(); // calls describe method on instance as intended

const accountingCopy = { describe: accounting.describe, describeThis: accounting.describeThis };

accountingCopy.describe(); // calls describe methos from instance with undefined as the name
                           // because 'this' keyword refers to accountingCopy, that has no name key

// accountingCopy.describeThis(); // generates error because describeThis requires Departemnt Type.