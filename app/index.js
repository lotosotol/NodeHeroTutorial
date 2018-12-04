// app/index.js
const calc = require('./calc');

const numbersToAdd = [3, 4, 10, 2];

const result = calc.sum(numbersToAdd);

console.log(`the result is: ${result}`);

const _ = require('lodash');
console.log('lodash result: ' +
                _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 }));   // → { ‘a’: 1, ‘b’: 2, ‘c’: 3 }
