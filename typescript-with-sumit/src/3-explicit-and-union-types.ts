
// Explicit 
const age:number = 34;
const fullName:string = "Shakil Ahmed";
// console.log(fullName);

let person:(number | string);
person = 'Shakil Ahmed';
person = 20;

// console.log(person);


// array

// number array
const arr:number[] = [1,2,3];
// arr.push('5') // error
// arr.push(5);

// string array
const names:string[] = ['noyon', 'nadim', 'shakil'];
names.push('mahfuj');

// number + string + boolean array

// 1 
const mixed1 = ['shakil', 45, false];

// 2
const mixed2:(number|string|boolean)[] = ['shakil', 45, false];

// number, string, boolean, object array
// one way
const allTypes = ['shakil', 20, false, {}];


// Second way

const allTypes2:(string| number| boolean|object)[] = [];

// allTypes2.push(30);
// allTypes2.push('noyon');
// allTypes2.push({name:'nadim'});
// allTypes2.push([1,2,3,4]);

// console.log(allTypes2);


// Object
// let c :object;
// c = {
//     name:'shakil',
//     age:20,
//     isTrue:false
// };

let d:object;
d = [1,2,3,4,5,'sa', false];
console.log(d);





