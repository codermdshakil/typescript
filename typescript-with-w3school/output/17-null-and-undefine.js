"use strict";
/**
 * Null and Undefine
 *
 * null -> means absence of value
 * undefine -> means not assign value
 *
 * - Optional Chaning (?.)
*/
let value5 = null;
value5 = 'hello';
// value5 = undefined;
// value5 = null; 
// console.log(value5);
/**
 * Nullish Coalescence
 *
 * - ?? it allows you to handle null and undefine type values
 *
 *
 * */
function printMileage(mileage) {
    console.log(`Mileage: ${mileage !== null && mileage !== void 0 ? mileage : 'Not Available'}`);
}
// console.log(printMileage(null)); // Not Available
// console.log(printMileage(undefined)); // Not Available
console.log(printMileage(10)); // Mileage: 10
