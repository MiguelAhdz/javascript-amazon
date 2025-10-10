import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');
//basic cases
console.log('it convert cents into dollars')
if (formatCurrency(2095) === '20.95') {
    console.log('passed');
}else{
    console.log('failed');
}

//edge cases
console.log('it works with 0')
if (formatCurrency(0) === '0.00') {
    console.log('passed');
}else{
    console.log('failed');
}

console.log('it rounds up to the nearest cent')
if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
}else {
    console.log('failed');
}

console.log('it rounds down to the nearest cent')
if (formatCurrency(2000.3) === '20.00') {
    console.log('passed');
}else{
    console.log('failed');
}