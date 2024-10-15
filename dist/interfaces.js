"use strict";
// Interfaces allows us just to define the structure not add the concrete values like classes
let user1;
user1 = {
    name: 'Max',
    age: 30,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there I am ');
