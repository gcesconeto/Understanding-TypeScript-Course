abstract class Department { // cant be instantiated
  // public readonly id: number; // readonly is typescript specific
  // name: string; // default behaviour is public
  protected employees: string[] = []; // protected is like private but can be accessed from child classes.

  static fiscalYear = 2022; // unavailable from instance, 'this' cant access it

  constructor(public readonly id: number, public name: string) { // shorthand for initializing props
    // this.name = n
  }

  static createEmployee(name: string) { // can be called without instantiating the class: Department.createEmployee('Greg')
    return { name }
  }

  abstract describe(this: Department): void; // abstract method that forces child classes to implement it

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super(id, 'IT');  // accesses the constructor of the superior class
    this.admins = admins;
  }

  describe(this: ITDepartment) {
    console.log(`${this.name} id:(${this.id})`)
  }
}

const it = new ITDepartment(2, ['Greg']);

console.log(it)

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: number, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0]
  }

  static getInstance() {  // Singleton paradigm, only one instance is possible
    if (this.instance) return this.instance; // this inside static method returns the class itself, not the instance
    this.instance = new AccountingDepartment(5, [])
    return this.instance;
  }


  get getLastReport() { // getter method, doesnt need parenthesis to be accessed
    if (this.lastReport) return this.lastReport;
    throw new Error('No reports!')
  }

  set setLastReport(report: string) {
    if (!report) throw new Error('Invalid report!')
    this.addReport(report)
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }
  
  describe(this: AccountingDepartment) {
    console.log(`${this.name} id:(${this.id})`)
  }

  printReports(this: AccountingDepartment) {
    console.log(this.reports)
  }
  
  addEmployee(this: AccountingDepartment, employee: string): void {
    if (employee.length < 5) return;
    this.employees.push(employee);
  }
}

const accounting = AccountingDepartment.getInstance(); // creates/ fetches instance 

console.log(accounting);

console.log(accounting.getLastReport); // getter function accessed

accounting.setLastReport = 'Shit just hit the turbine'; // setter method is called with an assignment

accounting.addReport('Shit just hit the fan')

accounting.describe(); // calls describe method on instance as intended

const accountingCopy = { describe: accounting.describe, describeThis: accounting.describeThis };

// accountingCopy.describe(); // calls describe methos from instance with undefined as the name
                           // because 'this' keyword refers to accountingCopy, that has no name key

// accountingCopy.describeThis(); // generates error because describeThis requires Departemnt Type.

accounting.addEmployee('Cesco');
accounting.addEmployee('Naty');

// accounting.employees[2] = 'Greg'; // error because employees property is private

accounting.describe();
accounting.printEmployeesInfo();