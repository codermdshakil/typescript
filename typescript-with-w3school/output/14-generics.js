"use strict";
/**
 * Generics - store dynamically type using variable
 *
 * - Generics are like food containers — you don’t know what food will be stored, but the container
 * works for anything!
 *
 *
 * */
// here S reciveded first parameter value string
// here T reciveded second parameter value number
function createPairs(v1, v2) {
    return [v1, v2];
}
// console.log(createPairs<boolean , number>(false, 20)); // [false, 20]
// <boolean , number> // dynamically sent type 
// console.log(createPairs<string , number>('Shakil Ahmed', 20)); // ['Shakil Ahmed', 20] 
// ## use Generics on Classes
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    // set value
    setValue(value) {
        this._value = value;
    }
    // get value
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
;
let value = new NamedValue('myNumber');
// set value
value.setValue(10);
// get value
const value1 = value.getValue(); // 10 
// console.log(value.toString());  //myNumber: 10
