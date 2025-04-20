"use strict";
/**
 * TypeScript Function  Summary:
 * This TypeScript file demonstrates the use of functions, including their syntax and various types:
 *
 * 1. Named functions: Functions with a defined name, such as `add` and `greet`.
 * 2. Anonymous functions: Functions assigned to a variable, such as `mySelf`.
 * 3. Arrow functions: Concise syntax for functions, such as `introduceMySelf` and `greatUser`.
 * 4. Void functions: Functions that do not return a value, such as `greatUser`.
 *
 * - Optional Parameter
 * - Default parameter
 *
 * Tips:
 * - Always define parameter and return types for better type safety.
 * - Use arrow functions for concise syntax, especially for callbacks or short functions.
 * - Use named functions for better readability and debugging.
 * - Void functions are useful for operations like logging or side effects.
 */
// ## Syntax of a Function in TypeScript 
// function functionName(parameterName1: paramterType, parameterName2: parameterType2): returnType {
//     // logic here
//     return result;
// }
//  sum function
function add(a, b) {
    return a + b;
}
const result1 = add(15, 25); // 40
// imagine function as a coffe machine
function makeCoffee(water, coffePowder) {
    return `☕ Coffe make with ${water} and ${coffePowder}`;
}
// console.log(makeCoffee('hot water', 'arabic beans'));
// 🧰 Types of Functions in TypeScript 
// 1. Named function
function greet(names) {
    return `Hello ${names}`;
}
// 2. Anonymous Function (Function Expression)
const mySelf = function (name, age) {
    return `Hello! here, My name is ${name} and I'm ${age} years Old!`;
};
// 3. Arrow function
const introduceMySelf = (name = 'Shakil Ahmed', age, target) => {
    return `My name is ${name}. I'm ${age} years old. My target is ${target}`;
};
// console.log(introduceMySelf('Shakil Ahmed', 20, ' Software Engineer | CEO of CoreThree'));
// 4. void function
const greatUser = (username) => {
    console.log(`Welcome ${username}`);
};
greatUser('Rakib Bhai'); // Welcome Rakib Bhai
