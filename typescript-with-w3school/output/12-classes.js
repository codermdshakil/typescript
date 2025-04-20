"use strict";
/**
 *
 * TypeScript Class
 *
 * - A class is a blueprint for creating objects with properties (data) and methods (functions).
 *
 *
 *
*/
// ## 🛠️ Basic Structure of a Class in TypeScript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // get age
    getAge() {
        return this.age;
    }
    // greet
    greet() {
        return `Hi, My name is ${this.name}, I'm ${this.age} years old.`;
    }
}
// create a object using Person class
// const p1 = new Person('Shakil Ahmed', 20);
// const r1 = p1.getAge();
// console.log(p1.greet());
// const p2 = new Person('Nadim Hassan', 21);
// const p3 = new Person('Noyon Rahman', 22);
