
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

// const r2 = mul(10, 20);  // 10 and 20 multiply is = 200 return value in string 



