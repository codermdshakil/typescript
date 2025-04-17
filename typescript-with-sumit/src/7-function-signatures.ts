
/**
 * Funtion singature is function parameter + returned type
*/

// 🔍 What is a Function Signature in TypeScript?

// A function signature is like a blueprint 🧱 — it defines:
// The parameter types
// The number of parameters
// The return type



// first
let sum1: (a:number, b:number) => number | string;

// function use here but above define it's parameters data types
sum1 = (a, b) => {
    return a + b;
}
// const r5 = sums(5,10);
// console.log(r5);

// second
let calculation:(a:number, b:number, c:string) => number;


calculation = (a:number, b:number, c:string) => {
    if(c === 'add'){
        return a+ b; // if your return value number so when you return you must return something number, same goes for string, boolean, array, object
    }
    else if(c==='minus'){
        return a - b;
    }
    else if(c==='mul'){
        return a * b;
    }
    else if(c==='div'){
        return a / b;
    }
    else{
        return 0; // if your return value number so when you return you must return something number, same goes for string, boolean, array, object
    }
}


// const r6 = calculation(10, 20, 'add');
// console.log(r6);



// Create a void function with function signature or function structure

let userDetails5 : (id:number|string, userInfo:{name:string, age:number}) => void;

userDetails5 = (id:number|string, userInfo:{name:string,age:number}) => {
    console.log(userInfo.name);
};


/**
 * Function signatures
 * 1. inline signature
 * 2. function signature using type alias
 * 
 * 
*/

// 1. 🔤 Inline Signature

function helloName(name:string):string{
    return ` Hello! - ${name}`;
}
// const r7 = helloName('Shakil Ahmed');
// const r8 = helloName('Noyon Rahman');
// console.log(r7);
// console.log(r8);

// 2. 🧩 Function Signature using Type Alias 

//** using type use = */
// type functionName = (name:string ) => void

//** using let, const : */
// let functionName : (name:string ) => void

// Examples 

//1. create custom function signature
type greetFunction = ( id:number, name:string) => string

//2. use custom signature function

const helloBrother:greetFunction = (id:number, name:string) => {
    return `Student id = ${id}. Student name ${name}`;
}

const result9 = helloBrother(1, 'Shakil Ahmed');
// console.log(result9);



// 3. 📦 Function Signature in Object / Interface
//**Using Interface */

// muckup to create users
interface User{
    id:number,
    name:string,
    lifeGoal:string,
    isHired:boolean,
    isStudent:boolean,
    salary:number
}


// using muckup create userShakil
const userShakil: User = {
    id:1,
    name:'Shakil Ahmed',
    lifeGoal:'CEO | Businessmen',
    isHired:false,
    isStudent:true,
    salary:12500
};

const userNoyon : User = {
    id:2,
    name:'Noyon Rahman',
    lifeGoal:'Businessmen | Founder | CEO',
    isHired:true,
    isStudent:true,
    salary:10000
};

const userNadim: User = {
    id:3,
    name:'Nadim Hassan',
    lifeGoal:'Get married',
    isHired:false,
    isStudent:false,
    salary:150000
}

// console.log(userShakil, userNoyon, userNadim);



/**
 * Summary of function signature
 * 
 * --- A function signature is like a blueprint 🧱 — it defines:
 * 
 * - The parameter types
 * - The number of parameters
 * - The return type
 * 
 * -- type -> to create custom type =
 * -- using direct function use :
 * 
 * --- Function signature
 * 1. inline singnature
 * 2. function singnature using [type alias]
 * 3. function singnature in object using [interface]
 *  
*/








