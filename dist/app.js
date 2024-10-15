"use strict";
// Interfaces allows us just to define the structure not add the concrete values like classes
// Interfaces can only be used to describe/define the structure of an object
class Person {
    constructor(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi');
        }
    }
}
let user1;
user1 = new Person();
user1.greet('Hi there I am ');
console.log(user1);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
