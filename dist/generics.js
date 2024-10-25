"use strict";
// const names: Array<string | number> = []; // similar to string[] or array of strings
// // ! Promise type
// const promise: Promise<string> = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve('This is done')
//     }, 2000)
// });
// promise.then( data => {
//     data.split(' ')
// })
// ! Creating Our Own Generic
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObJ = merge({ name: "Allon" }, { age: 26 });
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length > 0) {
        descriptionText = "Got" + element.length + " elements.";
    }
    else {
        descriptionText = "Got 0 elements or less";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
function extractAndConvert(obj, key) {
    return obj[key];
}
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item, 1));
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Allon");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const objStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Allon', 'Bacon', 'Biscuit'];
