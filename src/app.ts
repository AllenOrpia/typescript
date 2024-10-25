// ! Decorators are usually created with uppercase
// ! Decorators execute when classes are defined not when they are instanciated
// function Logger(constructor: Function) {
//     console.log('Logging....');
//     console.log(constructor)
// }

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function<T extends { new(...args: any[]): {name:string} } > (originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.querySelector(`#${hookId}`);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger('Logging-Person')// Special identifier
@WithTemplate("<h1>My person Object</h1>", "app")
class Person2 {
  name = "Allon";

  constructor() {
    console.log("Creating person object");
  }
}

const pers = new Person2();
console.log(pers);

// ---

function Log(target: any, propertyName: string) {
  console.log("Property decorator!!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accesor Decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// ? Method Decorator
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// ? Parametrer Decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
