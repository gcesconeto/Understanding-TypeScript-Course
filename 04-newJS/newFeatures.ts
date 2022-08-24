const myUserName = 'Cesco';
let age = 30;

age = 32;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Cesco',
  age: 32,
};

const copiedPerson = { ...person }; // deepcopy

const add = (...numbers: number[]) => {
  return numbers.reduce((acc, number) => acc + number, 0)
};

const result = add(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(result);

const [hobby1 , hobby2] = hobbies;

const {name, age: newAge} = person;

export {}