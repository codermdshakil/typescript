"use strict";
// Type Aliases:  Type Aliases are a powerful way to create custom, reusable types 
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} age is ${user.age}`);
};
let user2 = {
    name: 'Shakil Ahmed',
    age: 20
};
// userDetails(1,user2);
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'Sir ' : 'Mr '} ${user.name}`);
};
// sayHello(user2);
