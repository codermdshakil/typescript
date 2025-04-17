
// Type Aliases:  Type Aliases are a powerful way to create custom, reusable types 


// Custom type create

type userId = number|string;
type userObj = {name:string, age:number};

const userDetails = (id:userId, user:{name:string, age:number}) => {
    console.log(`User id is ${id}, name is ${user.name} age is ${user.age}`);
}

let user2 = {
    name:'Shakil Ahmed',
    age:20
};

// userDetails(1,user2);


const sayHello = ( user:userObj) => {
    console.log(`Hello ${user.age > 50 ? 'Sir ':'Mr '} ${user.name}`);
}

// sayHello(user2);
