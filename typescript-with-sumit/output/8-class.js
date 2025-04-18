"use strict";
/**
 * Class: A class is a blueprint for creating objects with properties (data) and methods (functions).
 * */
// Concept	        Description
// ------------------------------------
// constructor()	Special method to initialize the object
// this	            Refers to the current object
// public	        (default) Accessible anywhere
// private	        Only accessible inside the class
// protected	    Accessible inside the class and subclasses
// readonly	        Cannot be changed after assignment
// extends	        Inherit from another class
// implements	    Enforce structure using interfaces
// create a player class
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    // method
    play() {
        console.log(`${this.name} is playing!`);
    }
    // method
    ageIs() {
        console.log(` ${this.name} age is ${this.age}!`);
    }
}
const student2 = new Player('Shakil', 20, 'Bangladesh');
const student3 = new Player('nadim', 20, 'Bangladesh');
const student4 = new Player('noyon', 20, 'Bangladesh');
// console.log(student2);
const players = [];
// push values to players array
players.push(student2);
players.push(student3);
players.push(student4);
// foreach every element
players.forEach((player) => console.log(player.name));
// Access Modifier
student2.name = "Sagor";
student3.age = 21;
student4.country = 'Pakistan';
student4.age = 22;
// console.log(student2.country);
console.log(student4.name, student4.age, student4.country);
