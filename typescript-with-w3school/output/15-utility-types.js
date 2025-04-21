"use strict";
/**
 * Utility Types
 *
 *
 * */
// ## Partial changes all the properties in an object to be optional. 
// - Partial changes all the properties in an object to be optional.  
const point = {};
point.x = 10;
point.y = 20;
const myCar = {
    make: 'Mercedes Bezs',
    mileage: 10000,
    model: 'GLS 4500'
};
// console.log(myCar);
// Error: if any property don't assign throw error -> Property 'model' is missing in type '{ make: string; mileage: number; }' but required in type 'Required<Car>'
