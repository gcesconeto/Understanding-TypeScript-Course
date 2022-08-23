// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Guilherme',
  age: 32,
  hobbies: ['Coding', 'JobHunting'],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}