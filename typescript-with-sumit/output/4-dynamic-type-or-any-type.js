"use strict";
/**
 *  Any type :  means anytype of data i can store in this variable
 *
*/
// any disables TypeScript's type-checking for that variable. You can assign anything to it: string, number, object, function, etc.
let a;
// Examples:
// a = 'Shakil Ahmed';
// a = 20;
// a = {name:'shakil'}
// a = false;
// a = [1,3,4,5,6,67];
// Example 1: Parsing JSON from API
const response = '{"name":"John","age":30}';
const user = JSON.parse(response); // you don't know the exact structure
// console.log(user);
// console.log(user.name); // no type check
// console.log(user.age);
// unknown
function fetchData() {
    return JSON.parse('{ "name": "John", "age": 25 }');
}
;
const user1 = fetchData();
// console.log(user1);
// Object 
let b;
b = {
    name: 'Bangladesh',
    age: 20
};
console.log('check', b);
