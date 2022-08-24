function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result is:' + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) { // defining callback
  const result = n1 + n2;
  cb(result);
}

console.log(printResult(add(2, 3))); // returns undefined (void)

let combineValues: (n1: number, n2: number) => number;

combineValues = add;
// combineValues = printResult; // error: wrong type of function

console.log(combineValues(3,4));

addAndHandle(10, 20, (number) => {
  console.log(number);
  return number; // void in cb definition simply ignores the return, doesnt eval it to void.
})