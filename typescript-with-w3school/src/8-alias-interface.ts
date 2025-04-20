
/**
 * ------------------------
 * Type Alias  
 * -------------------------
 * 
 * 1. Primitive Type Alias
 * 2. Object Type Alias
 * 3. Union Type Alias
 * 4. Function Type Alias 
 * 
 * declare -> type variableName = {name:string, age:numer};
 * 
 * Use type when:
 * ---------------
 * 
 * - You need unions, primitives, tuples, or complex combinations
 * - You want a single, precise definition that won't be reopened
 * - You're dealing with function types or non-object data 
 * 
 * 
 * ➕ Can extend / merge multiple types	✅ With & (type)	✅ With extends (interface)
 * 
 * --------------
 * Interface    
 * --------------
 * 
 * declare -> interface variableName {name:string, age:numer};
 * 
 * Use interface when:
 * -------------------------        
 * - You're defining class-based objects or extending object types 
 * - You want to use declaration merging 
 * - You want better tooling for classes 
 * 
 * 
 * 💬 Simple Rule of Thumb
 * 📦 Use interface for objects/classes.
 * 🛠️ Use type for everything else.
 * 
*/

// ## Tyle Alias : A type alias is a custom name for any type to simplify and clarify your TypeScript code.


// ## 1. Primitive Type Alias

// type Username = string;
// const user1: Username = "Shakil Ahmed";

// ## 2. Object Type Alias

// type Product = {
//     id:number;
//     productName:string;
//     price:number;
// }

// using object type alias create a product obj
// const pd1 : Product  = {
//     id:1,
//     productName:'HeadPhone',
//     price:200
// };
// console.log(pd1);


// ## 3. Union Type Alias

// type Status = "loading" | "success" | "error";

// function handleStatus(status: Status) {
//   if (status === "loading") console.log("Loading...");
// }

// handleStatus('loading')

// ## 4. Function Type Alias 
// type Add = (x:number, y:number) => number;

// const sum1 : Add = (a, b) => a+b;

// console.log(sum1(10, 20));

// ### Alternative: interface 

// interface UserObj {
//     id:number;
//     name:string;
//     goal:string;
//     isHired:boolean;
//     info:object;
// }

// const u1: UserObj = {
//     id:1,
//     name:'Shakil Ahmed',
//     goal:'Billioniare | Entrepenour',
//     isHired:false,
//     info:{
//         hand:2,
//         eye:2
//     }
// };

// const u2: UserObj = {
//     id:2,
//     name:'Noyon Rahman',
//     goal:'Dont know',
//     isHired:true,
//     info:{
//         hand:2,
//         eye:2
//     }
// };

// const u3: UserObj = {
//     id:3,
//     name:'Nadim Hassan',
//     goal:'Dont know',
//     isHired:false,
//     info:{
//         hand:2,
//         eye:2
//     }
// };


// const allUsers:UserObj[] = [u1, u2, u3];
// console.log(allUsers);

 

/**
 * Differents between Type Alias and Interface
 * */ 

// 1. Basic Object 
type UserType = {name:string,age:number};
interface UserTypeobj {name:string, age:number};


// 2. Union Types (Only with type)

type Status1 = "loading" | "success" | "error"; // ✅ Allowed
// interface Status = "loading" | "success" | "error"; ❌ Not allowed

// 3. Expending types

// With type
type Animal = { name: string };
type Dog = Animal & { breed: string };

// With interface
interface Animal1 { name: string }
interface Dog1 extends Animal1 { breed: string }





