
/**
 * Function in ts: In TypeScript, functions work the same way as in JavaScript, but with types!
 * 
 * */ 



// basic syntax

//** Normal function 

function great(name:string) : string{
    return `Hello Mr. ${name}`;
}

// Summary : 
// name: string → Parameter and its type
// : string → Return type

// console.log(great('Shakil Ahmed')); // Hello Mr. Shakil Ahmed
// console.log(great('Noyon Rahman')); // Hello Mr. Noyon Rahman
// console.log(great('Nadim Hassan')); // Hello Mr. Nadim Hassan

//** arrow function  

// sum and return number
const sum = (a:number, b:number): number => {
    return a +b;
};
// const r1 = sum(5, 10); 

// multiply two number and return number/string
const mul = (a:number, b:number): ( number | string) => {
    return `${a} and ${b} multiply is = ${a*b}`;
};

const r2 = mul(10, 20);  // 10 and 20 multiply is = 200 return value in string 
// console.log(r2);

// Calculate discount formula 
function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount) / 100;
};

// console.log(calculateDiscount(500, 5));

//1. arrow function 
const greet = (name: string = "John Deo"): string => {
    return `Hello, ${name}`;
};
// or shortcut 
// function with default parameter
// const greeting = (name: string = "John Deo"): string => `Hello, ${name}`;
// console.log(greeting());
// console.log(greeting('shakil ahmed'));

// 2. Optional Parameters with void function

// function log(message: string, user?: string): void {
//   console.log(`${user ?? "Anonymous"}: ${message}`);
// };

// console.log(log('Hello vai'));



// 3.Function Types (for reusability) [custom type]

// type MathOperation = (a:number, b:number) => number;
// const add:MathOperation= (a, b) => a + b;
// const multy:MathOperation = (a, b) => a * b;


// 4. Void Function (returns nothing)
// function sayHello(): void {
//     console.log("Hello!");
// }

// sayHello();


// Task - 1:

const isAdult = (name:string,age:number):any =>{
    if(age >= 18){
      console.log(`${name} is Adult!`);
    }
    else{

        console.log(`${name} is Not Adult!`);
    }
}

// isAdult('Siam',18);



// Summary
// 1. normal function
// 2. arrow function
// 3. void function
// 4. return number, string, any of function return value

