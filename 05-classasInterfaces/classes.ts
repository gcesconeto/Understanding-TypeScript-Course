class Department {
  // public readonly id: number; // readonly is typescript specific
  // name: string; // default behaviour is public
  
  private employees: string[] = [];

  constructor(public readonly id: number, public name: string) { //shorthand for initializing props
    // this.name = n
  }

  describe() {
    console.log(`The name of this department is: ${this.name}`);
  }

  describeThis(this: Department) {
    console.log(`The name of this department is: ${this.name}`);
  }

  addEmployee(this: Department, employee:string) {
    this.employees.push(employee);
  }

  printEmployeesInfo(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department(5, 'Accounting'); // creates instance with Accounting for 'name'

console.log(accounting);

accounting.describe(); // calls describe method on instance as intended

const accountingCopy = { describe: accounting.describe, describeThis: accounting.describeThis };

accountingCopy.describe(); // calls describe methos from instance with undefined as the name
                           // because 'this' keyword refers to accountingCopy, that has no name key

// accountingCopy.describeThis(); // generates error because describeThis requires Departemnt Type.

accounting.addEmployee('Cesco');
accounting.addEmployee('Naty');

// accounting.employees[2] = 'Greg'; // error because employees property is private

accounting.describe();
accounting.printEmployeesInfo();

// INHERITANCE //

class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super(id, 'IT');  // accesses the constructor of the superior class
    this.admins = admins;
  }
}

const it = new ITDepartment(2, ['Greg']);

console.log(it)