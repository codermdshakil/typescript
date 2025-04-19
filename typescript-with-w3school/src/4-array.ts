
/**
 * Array summary
 * 
 * - An array is a collection of values stored in a single variable.
 * - Only one type → string[], number[]
 * - Or mixed types → using any[], union types, or object[] 
 * 
 * 🔍 Accessing Array Elements (Different Ways) 
 * 1. using index : console.log(friends[0]);
 * 2. using slice : console.log(friends.slice(1,2));
 * 
 * ➕ Add Elements to Array (Different Ways) 
 * 1. push -> end of the array
 * 2. unshift -> first of the array
 * 3. splice -> specific index of array
 * 
 * ➖ Delete Elements from Array (Different Ways) 
 * 1. pop -> end element of array
 * 2. shift -> first element of array
 * 3. splice -> specific index element of array
 *
 * Read only array
 * const names: readonly string[] = ["Dylan"];
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

// create object rules using interface

// interface User{
//     id:number;
//     name:string;
//     profession:string;
//     salary:number;
//     isHired:boolean;
//     heHas: object;
// }

// const sd1:User = {
//     id:1,
//     name:'Shakil Ahmed',
//     profession:'Teaching',
//     salary:15000,
//     isHired:false,
//     heHas:{hand:2,eye:2}
// };

// const sd2:User = {
//     id:2,
//     name:'Noyon Rahman',
//     profession:'Software Engineer',
//     salary:20000,
//     isHired:true,
//     heHas:{hand:2,eye:2}
// };

// const sd3:User = {
//     id:3,
//     name:'Nadim Hassan',
//     profession:'Civil Engineer',
//     salary:18000,
//     isHired:false,
//     heHas:{hand:2,eye:2}
// };

// create a friends array where every array element type is user
// const friends: User[] = [sd1, sd2, sd3];


// 🔍 Accessing Array Elements (Different Ways) 

// 1. using index : console.log(friends[0]);
// 2. using slice : console.log(friends.slice(1,2));

// ➕ Add Elements to Array (Different Ways) 

// 1. push -> end of the array
// 2. unshift -> first of the array
// 3. splice -> specific index of array

// const sd4:User = {
//     id:4,
//     name:'Asraf',
//     profession:'Mecanical Eng',
//     salary:10000,
//     isHired:false,
//     heHas:{hand:2,eye:2}
// };

// push
// friends.push(sd4);

// unshift
// friends.unshift(sd4)

// splice 
// friends.splice(2,0,sd4)
 

// ➖ Delete Elements from Array (Different Ways) 
// 1. pop -> end element of array
// 2. shift -> first element of array
// 3. splice -> specific index element of array


// pop
// friends.pop();

// shift
// friends.shift();

// splice
// friends.splice(0,1);


// Project: 🛠️ Mini CRUD Operation on users Array 


type User = { id: number, name: string };

let userList: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// ## Create

function addUser(user:User){
    userList.push(user);
};
addUser({id:3, name:'Shakil'});
 
// ## Read

function getUserById(id:number){
    const findedItem = userList.find((user) => user.id === id);
    return findedItem;
}
// console.log(getUserById(2));


// ## Update

function updateUser(id:number, newName:string){
    const findedItem = userList.find((user) => user.id === id);
    if(findedItem){
        findedItem.name = newName;
    }
    return findedItem;
};
updateUser(2,'Noyon Rahman'); 


// ## delete

function deleteById(id:number){
    const findedUser = userList.find((user) => user.id === id);
    const filteredUsers = userList.filter((user) => user != findedUser);
    return filteredUsers;
};

// console.log(deleteById(2));








