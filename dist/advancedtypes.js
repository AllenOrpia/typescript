"use strict";
/*
    ? Intersection Types
        * Intersection types allow us to combine other types
*/
var _a;
const e1 = {
    name: "All9on",
    privileges: ["create-server"],
    startDate: new Date(),
};
function addd(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addd('allon' + 'yoh');
result.split(' ');
// ! Optional Chaining
const fetchedUserData = {
    id: 'ulk',
    name: 'Allon',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
function printEmployeeInformation(emp) {
    console.log("Name" + emp.name);
    // ! Example of typeguard
    if ("privilenges" in emp) {
        console.log("Privileges " + emp.privilenges);
    }
    if ("startDate" in emp) {
        console.log(emp.startDate);
    }
    printEmployeeInformation({
        name: "Allon",
        startDate: new Date(),
    });
}
class Car {
    drive() {
        console.log("Driving");
    }
    loadCargo(amount) {
        console.log("Loading cargo" + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(1000);
    }
    // Can Also use
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({
    type: "bird",
    flyingSpeed: 10,
});
// ! Type Casting
// const userInputElement = <HTMLInputElement>document.querySelector('#user-input')!;
const userInputElement = document.querySelector("#user-input");
userInputElement.value = "Hi there";
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character!",
};
// ! Function Overloads
