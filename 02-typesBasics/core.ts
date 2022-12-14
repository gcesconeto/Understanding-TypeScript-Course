function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    throw new Error('Wrong input');
  }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResults = true;
const resultText = 'Result is: ';

add(number1, number2, printResults, resultText);

export {}