"use strict";
/**
 * Array
 * - An array is a collection of values stored in a single variable.
 * - Only one type → string[], number[]
 * - Or mixed types → using any[], union types, or object[]
 *
 *
 *
 *
*/
const sd1 = {
    id: 1,
    name: 'Shakil Ahmed',
    profession: 'Teaching',
    salary: 15000,
    isHired: false,
    heHas: { hand: 2, eye: 2 }
};
const sd2 = {
    id: 2,
    name: 'Noyon Rahman',
    profession: 'Software Engineer',
    salary: 20000,
    isHired: true,
    heHas: { hand: 2, eye: 2 }
};
const sd3 = {
    id: 3,
    name: 'Nadim Hassan',
    profession: 'Civil Engineer',
    salary: 18000,
    isHired: false,
    heHas: { hand: 2, eye: 2 }
};
// create a friends array where every array element type is user
const friends = [sd1, sd2, sd3];
// 🔍 Accessing Array Elements (Different Ways) 
// 1. using index : console.log(friends[0]);
// 2. using slice : console.log(friends.slice(1,2));
// ➕ Add Elements to Array (Different Ways) 
// 1. push -> end of the array
// 2. unshift -> first of the array
// 3. splice -> specific index of array
const sd4 = {
    id: 4,
    name: 'Asraf',
    profession: 'Mecanical Eng',
    salary: 10000,
    isHired: false,
    heHas: { hand: 2, eye: 2 }
};
// push
friends.push(sd4);
// unshift
// friends.unshift(sd4)
// splice 
// friends.splice(2,0,sd4)
// ➖ Delete Elements from Array (Different Ways) 
// 1. pop -> end element of array
// 2. shift -> first element of array
// 3. splice -> specific index element of array
// pop
// friends.pop();
// shift
// friends.shift();
// splice
// friends.splice(0,1);
