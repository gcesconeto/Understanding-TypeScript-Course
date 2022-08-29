// Generics

const names = ['Greg', 'Cesco'];

const array: Array<string> = []; // Array is the generic type, needs more information


array[0].length;

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve('This is done'), 2000);
})

promise.then((data) => data.split('')); // Works because string is specified as promise return

// Generic Functions

function merge<T, U> (objA: T, objB: U) {  // 100% generic types
  return Object.assign(objA, objB)
}

const merged = merge<{name: string}, {age: number}>({ name: 'Greg' }, { age: 32 }); // Defining concrete types in function call (works by inference)

console.log(merged.name); // Works because the generic types on the function let TS know that
                          // function generates output object with name key

// Type constraints

function mergeObj<T extends object, U extends object> (objA: T, objB: U) {  // Generic type constrained to objects
  return Object.assign(objA, objB)
}

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let description = 'Empty';
  if (element.length > 0) {
    description = 'Has lenght of ' + element.length;
  }
  return [element, description]
}

// keyof constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) { // guarantees that U is a key of T
  return obj[key];
}

console.log(extractAndConvert({name: 'Greg'}, 'name'));

// Generic Classes

class DataStorage<T> { // works safely only with primitive types.
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  geItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>(); // Instance initialized as T = string

textStorage.addItem('30');