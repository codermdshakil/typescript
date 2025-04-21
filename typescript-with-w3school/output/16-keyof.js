"use strict";
/**
 * TypeScript Keyof
 *
 * - keyof is simpley extract properties from object
 *
 * */
// create a Person using Person 
const user1 = {
    name: 'Shakil Ahmed',
    age: 20,
    fee: 10000
};
function printPropertiesOfUser(person, property) {
    console.log(`Print person properties ${property}: ${person[property]}`);
}
// using keyof extract name property from person obj
// printPropertiesOfUser(user1, 'name'); // name: Shakil
