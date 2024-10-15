// Interfaces allows us just to define the structure not add the concrete values like classes
// Interfaces can only be used to describe/define the structure of an object

// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;

// }

// let user1: Person;

// user1 = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ' + this.name)
//     }
// }

// user1.greet('Hi there I am ')


interface Greetable {
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30

    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
}

let user1: Greetable;
user1 = {
    name: 'Max',
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

user1.greet('Hi there I am ')