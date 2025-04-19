
/**
 * Array
 * - An array is a collection of values stored in a single variable.
 * - Only one type → string[], number[]
 * - Or mixed types → using any[], union types, or object[] 
 * 
 * 
 *
 *  
*/


// ## define array using only one type using create array 

// const nums:number[] = [1,2,3,5,6,7,8,9,10];
// const names: string[] = ['shakil','nadim','noyon'];
// const hiredStudents:boolean[] = [false, false, true];
// const students:object[] = [{name:'Shakil', age:20},{name:'Nadim', age:21},{name:'Noyon', age:22}];


// ## define array using mixed types

// 1. using union types: create array using mixed types like string, number, boolean

// const namesWithHired:(string | number | boolean)[] = ['shakil',20 ,false,'nadim', 21, false, 'noyon', 22, true];

// 2. using mixed type : this studentObj variable now can guess based on array element data types that which types i can add to this array

// const studentsObj = [{name:'shakil', age:20}, true, [1,2,3,4]];

// 3. using any type: create array

// const students:any = [{name:'Shakil', age:20, isHired:false, goal:'Buil Software Company'}, {name:'Noyon', age:22, isHired:true, goal:'Buil Software Company'}];


interface User{
    id:number;
    name:string;
    profession:string;
    salary:number;
    isHired:boolean;
    heHas: object;
}

const sd1:User = {
    id:1,
    name:'Shakil Ahmed',
    profession:'Teaching',
    salary:15000,
    isHired:false,
    heHas:{hand:2,eye:2}
};

const sd2:User = {
    id:2,
    name:'Noyon Rahman',
    profession:'Software Engineer',
    salary:20000,
    isHired:true,
    heHas:{hand:2,eye:2}
};

const sd3:User = {
    id:3,
    name:'Nadim Hassan',
    profession:'Civil Engineer',
    salary:18000,
    isHired:false,
    heHas:{hand:2,eye:2}
};

// create a friends array where every array element type is user
const friends: User[] = [sd1, sd2, sd3];


// 🔍 Accessing Array Elements (Different Ways) 

// 1. using index : console.log(friends[0]);
// 2. using slice : console.log(friends.slice(1,2));


 



 
