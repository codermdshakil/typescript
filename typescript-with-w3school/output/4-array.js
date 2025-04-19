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
