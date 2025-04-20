"use strict";
/**
 * Learning Summary
 *
 * ---------------------------------------------------------------------------------------------------------------
 * Feature                          | extends                                   | implements
 * ---------------------------------------------------------------------------------------------------------------
 * Used With                        | Classes extending other classes           | Classes implementing interfaces
 * ---------------------------------------------------------------------------------------------------------------
 * Inheritance                      | Inherits properties and methods           | Inherits structure (shape only)
 * ----------------------------------------------------------------------------------------------------------------
 * Can Use Logic                    | Yes, can reuse logic from parent class    | No, you must write your own logic
 * --------------------------------------------------------------------------------------------------------------------
 * Multiple Allowed                 | ❌ One class can extend only one class    | ✅ A class can implement multiple interfaces
 * ----------------------------------------------------------------------------------------------------------------------------
 * Keyword Meaning                  | “I am a kind of...”                       | “I agree to follow this contract...”
 * ---------------------------------------------------------------------------------------------------------------------
 *
 *
 * Topic Summary:
 *
 * - `extends` for class inheritance.
 * - `implements` for enforcing interface structure.
 * - Single inheritance with `extends`.
 * - Multiple interface implementation with `implements`.
 * - Example of extending a class (`finalStudent`).
 * - Instances of extended class with additional attributes.
 *
 *
 *
*/
// ## extends examples
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    makeSoound() {
        console.log('Some sound');
    }
}
// Dog2 class extends Animal2 class 
class Dog2 extends Animal2 {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    getDogAge() {
        console.log(`Animal name is ${this.name} and age is ${this.age}.`);
    }
}
// studentShakil class implements interface of Student
class StudentShakil {
    constructor(id, name, age, tuitionFee) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.tuitionFee = tuitionFee;
    }
    getAge() {
        console.log(`My age is ${this.age}`);
    }
    inroduceMyself() {
        console.log(`
            My class id is ${this.id}
            My name is ${this.name}.
            My Tuition Fee is ${this.tuitionFee}            
            `);
    }
}
// final student extends of StudentShakil class
class finalStudent extends StudentShakil {
    constructor(id, name, age, tuitionFee, fatherSalary) {
        super(id, name, age, tuitionFee);
        this.fatherSalary = fatherSalary;
    }
}
// create students using finalStudent class
const studentFirst = new finalStudent(1, 'Shakil ahmed', 20, 15000, 20000);
// studentFirst.inroduceMyself();
// studentFirst.getAge();
// console.log(studentFirst.tuitionFee);
const studentSecond = new finalStudent(2, 'Noyon Rahman', 22, 12000, 50000);
const studentThird = new finalStudent(3, 'Nadim Hassan', 21, 10000, 60000);
