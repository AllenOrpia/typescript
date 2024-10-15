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


interface Named {
    readonly name?: string
    outputName?: string;
}


interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30

    constructor(name?: string) {
        if (name) {
            this.name = name
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name)
        } else {
            console.log('Hi')
        }
    }
}

let user1: Greetable;

user1 = new Person()
user1.greet('Hi there I am ')
console.log(user1)

/* 
    ! Why interfaces ? 
        * 
    ! Interfaces will not get compiled 
    ! Interfaces will not be translated or end up in JS files, its only a typescript feature
    ! Interfaces are only used during compilation to check your code
*/


interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2
}