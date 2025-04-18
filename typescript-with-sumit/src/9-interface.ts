

// 🧠 What is an Interface in TypeScript?
// - Think of an interface like a blueprint or rulebook that says
// - If you want to create this kind of object, it must have these properties.

// interface = Student info rule [ami mone mori]

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
