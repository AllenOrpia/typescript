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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObJ = merge({ name: "Allon" }, { age: 26 });

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";

  if (element.length > 0) {
    descriptionText = "Got" + element.length + " elements.";
  } else {
    descriptionText = "Got 0 elements or less";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item, 1));
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Allon");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal
}


const names: Readonly<string[]> = ['Allon', 'Bacon', 'Biscuit'];
names.push('Yoh');
names.pop();