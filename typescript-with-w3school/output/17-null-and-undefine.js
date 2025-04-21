"use strict";
/**
 * Null and Undefine
 *
 * null -> means absence of value
 * undefine -> means not assign value
 *
 * - Optional Chaning (?.)
 *
 * Summary:
 *
 * - Demonstrates the use of `null` and `undefined` in TypeScript.
 * - Explains optional chaining (`?.`) for safely accessing properties.
 * - Shows nullish coalescing (`??`) to handle `null` and `undefined` values.
 * - Uses null assertion (`!`) to assert that a value is not `null` or `undefined`.
 *
 * Key Examples:
 * 1. Optional chaining (`?.`) is not explicitly used in this code but is mentioned.
 * 2. Nullish coalescing (`??`) is used in the `printMileage` function.
 * 3. Null assertion (`!`) is used in the `getValue` function to access the length of a possibly undefined string.
 *
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
// console.log(printMileage(10)); // Mileage: 10
/**
 * Null Assertion (!)
 *
 * - using null assertion we can
 *
*/
function getValue() {
    return 'ShakilAhmed';
}
let value6 = getValue();
console.log('value length: ' + value6.length);
