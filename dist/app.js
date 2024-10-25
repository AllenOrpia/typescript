"use strict";
// ! Decorators are usually created with uppercase
// ! Decorators execute when classes are defined not when they are instanciated
// function Logger(constructor: Function) {
//     console.log('Logging....');
//     console.log(constructor)
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookEl = document.querySelector(`#${hookId}`);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
            }
        };
    };
}
// @Logger('Logging-Person')// Special identifier
let Person2 = class Person2 {
    constructor() {
        this.name = "Allon";
        console.log("Creating person object");
    }
};
Person2 = __decorate([
    WithTemplate("<h1>My person Object</h1>", "app")
], Person2);
const pers = new Person2();
console.log(pers);
// ---
function Log(target, propertyName) {
    console.log("Property decorator!!");
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log("Accesor Decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// ? Method Decorator
function Log3(target, name, descriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// ? Parametrer Decorator
function Log4(target, name, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
