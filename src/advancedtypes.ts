/* 
    ? Intersection Types
        * Intersection types allow us to combine other types
*/

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "All9on",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;

// ! Type Guards

// These functions below are function overloads
function addd(a: number, b: number): number;
function addd(a: string, b: string): string;
function addd(a: Combinable2, b: Combinable2) {
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
    job: { title: 'CEO', description: 'My own company'}
}

console.log(fetchedUserData?.job?.title)

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
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

  loadCargo(amount: number) {
    console.log("Loading cargo" + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
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

// ! Descriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const userInputElement = document.querySelector(
  "#user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there";

// ! Index Types

interface ErrorContainer {
  // { email: 'Not valid email, username: 'Must start with capital' }
  // ! You can define index types with square brackets
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character!",
};

// ! Function Overloads
