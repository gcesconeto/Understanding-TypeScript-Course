type numStr = number | string // union type alias

function combine(
  input1: number | string, // union type
  input2: numStr, 
  resultType: 'number' | 'string' // literal type
  ) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, 'number');
console.log(combinedAges);

const combinedAgesString = combine('30', '26', 'number');
console.log(combinedAgesString);

const combinedNames = combine('Zé', 'Paulo', 'string');
console.log(combinedNames);

export {}