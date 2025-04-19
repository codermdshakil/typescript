"use strict";
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
 *
*/
let userList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];
// ## Create
function addUser(user) {
    userList.push(user);
}
;
addUser({ id: 3, name: 'Shakil' });
// ## Read
function getUserById(id) {
    const findedItem = userList.find((user) => user.id === id);
    return findedItem;
}
// console.log(getUserById(2));
// ## Update
function updateUser(id, newName) {
    const findedItem = userList.find((user) => user.id === id);
    if (findedItem) {
        findedItem.name = newName;
    }
    return findedItem;
}
;
updateUser(2, 'Noyon Rahman');
// ## delete
function deleteById(id) {
    const findedUser = userList.find((user) => user.id === id);
    const filteredUsers = userList.filter((user) => user != findedUser);
    return filteredUsers;
}
;
// console.log(deleteById(2));
