// After creating an object, Typescript will infer an object type of that object created

// const person: {
//     // This allows us to specify its an object and be more specific about the object
//     name: string;
//     age: number;
// } = {
//     name: 'Allon',
//     age: 30,
// }

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // This code below marks the role as a tuple
//     role: [number, string]
// } = {
//     name: 'Allon',
//     age: 30,
//     hobbies : ['Sports', 'Cookinbg'],
//     role: [2, 'author']
// }



// This code below would be the better synstax because we allow typescript to infer our type

// ! Often, you'll see enums with all uppercase values
enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = 'author'};

const person = {
    name: 'Allon',
    age: 30,
    hobbies : ['Sports', 'Cookinbg'],
    role: Role.ADMIN
}


// Tells typescript this is not just an array but an array of strings
let favActivities: string[];

favActivities = ['Basketball'];


console.log(person.name);


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase)
}

