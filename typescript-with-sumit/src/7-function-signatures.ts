
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


// 1. 🔤 Inline Signature

function helloName(name:string):string{
    return ` Hello! - ${name}`;
}
// const r7 = helloName('Shakil Ahmed');
// const r8 = helloName('Noyon Rahman');
// console.log(r7);
// console.log(r8);






