"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// This function never returns produces a value
// This is an example of a never type being return
function generateError(messsage, code) {
    throw {
        message: messsage,
        errorCode: code
    };
}
generateError('An error occured', 500);
