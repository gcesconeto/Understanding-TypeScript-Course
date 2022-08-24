// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
  name: 'Guilherme',
  age: 32,
  hobbies: ['Coding', 'JobHunting'],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}