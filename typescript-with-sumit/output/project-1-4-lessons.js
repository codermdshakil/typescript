"use strict";
// Project using lesson 1 to 4:
function handleUserDataForm(jsonInput, emails) {
    let parsedData;
    try {
        parsedData = JSON.parse(jsonInput);
    }
    catch (err) {
        console.log('Invalid json input!');
        return;
    }
    // check 
    if (typeof parsedData === "object" &&
        parsedData !== null &&
        "name" in parsedData &&
        "age" in parsedData &&
        "email" in parsedData &&
        typeof parsedData.name === "string" &&
        typeof parsedData.age === "number" &&
        typeof parsedData.email === "string") {
        const user = parsedData;
        console.log(`Welcome ${user.name}, age ${user.age}`);
        parsedData.email = emails;
        return parsedData;
    }
    else {
        console.log('Invalid user data structure');
    }
}
// handleUserDataForm('{"name": "Bob"}');
let result = handleUserDataForm('{"name": "Alice", "age": 25, "email":""}', 'ahmedshakil0512@gmail.com');
// console.log(result);
