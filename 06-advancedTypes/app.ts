// Type Intersections

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Greg',
  privileges: ['commit-to-main'],
  startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;  // number only, intersection between the two

// Type Guards

function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === 'string' || typeof n2 === 'string') { // type guard if
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name); 
  if ('privileges' in emp) {                      // type guard with "key in"
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving...');
  }
  unload() {
    console.log('Unloading Cargo...');
  }
}

type Vehicle = Car | Truck;

const car = new Car()
const truck = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {              // type guard with "instanceOf"
    vehicle.unload();
  }
}

useVehicle(car);
useVehicle(truck);

// Discriminated Unions

interface Bird {
  type: 'bird';    // use literal type to discriminate clearly between types in union
  flyingspeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingspeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
    }
    console.log('Moving at: ' + speed);
}

moveAnimal({type: 'bird', flyingspeed: 10});

// Type Casting

const paragraph = document.querySelector('message-output') as HTMLParagraphElement; // Type casting

paragraph.innerHTML = 'Hello dear sir/madam'; // Works beacuse HTMLParagraphElement is cast

const userInput = document.getElementById('user-input'); // Older form of type casting

if (userInput) {
  (userInput as HTMLInputElement).value = 'Thank you for the message';
}

const userInput2 = <HTMLInputElement>document.getElementById('user-input'); // Older form of type casting

userInput2.value = 'Thank you for the message';

// Index Properties

interface ErrorContainer {
  [key: string]: string;   // flexible object interface with any keys of type string, that hold strings
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  // name: 65 // Error because value is not a string
};

// Function Overload

function add2(n1: string, n2: string): string;   // overload 1
function add2(n1: number, n2: number): number;   // overload 2
function add2(n1: Combinable, n2: Combinable) {
  if (typeof n1 === 'string' || typeof n2 === 'string') { // type guard if
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add2('Greg ', 'Ribeiro');
result.split(' '); // gives error without overload because results doesnt get 'string' type