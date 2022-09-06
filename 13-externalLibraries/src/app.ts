import lodash from 'lodash';

declare var GLOBAL: any; // tells TS that this variable exists no matter what, and prevents errors

console.log(lodash.shuffle([1, 2, 3, 4, 5, 6]));

console.log(GLOBAL);