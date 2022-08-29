// Generics

const names = ['Greg', 'Cesco'];

const array: Array<string> = []; // Array is the generic type, needs more information


array[0].length;

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve('This is done'), 2000);
})

promise.then((data) => data.split('')); // Works because string is specified as promise return

// Generic Functions

function merge<T, U> (objA: T, objB: U) {  // Generic types
  return Object.assign(objA, objB)
}

const merged = merge<{name: string}, {age: number}>({ name: 'Greg' }, { age: 32 }); // Defining concrete types in function call (works by inference)

console.log(merged.name); // Works because the generic types on the function let TS know that
                          // function generates output object with name key