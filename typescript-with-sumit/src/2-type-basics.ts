
//** when I declare a variable value with typescript it automatically diteck with type of variable this variable contain */

// const playerName = 'Mashrafi';
// playerName = 45;


// let playerName;
// playerName = "Masrafi";
// playerName = 45;


// console.log(playerName);


// function in typescript
function multiply(a:number, b:number){
    return a * b;
}

// console.log(multiply(3,'4')); // error
// console.log(multiply(3,4));
// console.log(multiply(5,4));


// array

const fruits = ['apple', 'banana', 'orange'];

// I can't push number values into the fruits array because of all array elements is string
// fruits.push(45);



// one way
const fruits1:(number| boolean | string)[] = ['apple', 'banana', 'orange'];

// Now I can push number, string and boolean all types of data in frutis1 array because now explicitly I tell to the fruits1 array that you can containe number, string, boolean values 

// fruits1.push('pineapple');
// fruits1.push(45);
// fruits1.push(false);
// console.log(fruits1);


// second way 
const mixed = ['apple', 'banana', 'orange', {}, []];
// now in this mixed array i can push string, number, boolean, object and array elements

// mixed.push('hello')
// mixed.push({name:'shakil'});
// mixed.push([4,6,8,10]);
// console.log(mixed);



// Two types of Assignment // 

// 1. Explicit - writing out the type:

const firstName:string = "Shakil Ahmed";
// console.log(firstName);

// 2. Implicit - TypeScript will "guess" the type, based on the assigned value: 
const lastName = "Ahmed";
console.log(lastName);






 





