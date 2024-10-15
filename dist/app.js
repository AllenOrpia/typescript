"use strict";
// Interfaces allows us just to define the structure not add the concrete values like classes
// Interfaces can only be used to describe/define the structure of an object
class Person {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = {
    name: 'Max',
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there I am ');
