"use strict";
function add(n1, n2, showResult, phrase) {
    const res = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        console.log(phrase);
        return res;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = false;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);