"use strict";
/**
 *
 * TypeScript Class
 *
 * - A class is a blueprint for creating objects with properties (data) and methods (functions).
 * - super(...) is required when a class extends another class. It calls the constructor of the parent class. Always call super() before using this.
 *
 *
 *
*/
// ## 🛠️ Basic Structure of a Class in TypeScript with access modifiers public, private, protected, readonly
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
// ## Class with Inheritance (Child class extends Parent) 
class Animal1 {
    constructor(name, age, price) {
        this.name = name;
        this.age = age;
        this.price = price;
    }
    makeSound() {
        console.log('Some sound');
    }
    getPrice() {
        console.log(`Animal name is ${this.name} and Price is ${this.price}`);
    }
}
// Dog1 class inheritence using  extends keyword from Animal1 class 
class Dog1 extends Animal1 {
    constructor(name, age, price, isAdult, country) {
        super(name, age, price); // inheritence 
        this.isAdult = isAdult;
        this.country = country;
    }
    dark() {
        console.log('Woof woof');
    }
}
// create a dog 
const d1 = new Dog1('Doggy', 12, 1000, true, 'Bangladesh');
// d1.makeSound();
// d1.dark();
// d1.getPrice();
// console.log(d1.country);
