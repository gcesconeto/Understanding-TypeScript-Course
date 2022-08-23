let userInput: unknown;
let userName: string;


userInput = 5;
userInput = 'Max';
// userName = userInput; // error because userinput can be anything
if (typeof userInput === 'string') {
  userName = userInput; // no error because it is type checked
}

function generateError(msg: string, code: number): never { // never used because the functions stops execution of script
  throw { message: msg, errorCode: code };
}

generateError('this is wrong', 500);