"use strict";
/**
 * Type Script Utility Types
 *
 * 1. Partial
 * - Partial changes all the properties in an object to be optional.
 *
 *
 * 2. Required
 * - Required changes all the properties in an object to be required.
 *
 *
 * 3. Record
 * - Record is a shortcut to defining an object type with a specific key type and value type.
 * - Record<string,number>
 * -- string means -> properties name
 * -- number measn -> properties value
 *
 * 4. Omit
 * - Omit removes keys from an object type.
 * - using Omit i can say which key need to removed
 * - Omit <Persons1, 'location' | 'age'> that means 'location' or 'age' key will removed from
 * nadimHassan object
 *
 * 5. Pick
 * - Pick removes all but the specified keys from an object type.
 *
 * 6. Exclude
 * - Exclude removes types from a union.
 *
 * 7. returnType
 *
 * 8. readOnly
 *
 * 9. Parameters
 * - Parameters extracts the parameter types of a function type as an array.
 *
 *
 * */
// * - Pick removes all but the specified keys from an object type. 
const userObj = {
    name: 'Shakil Ahmed',
    // age:20,
    // location:"Gazipur"
};
// console.log(userObj);
/**
 * Exclude
 * - Exclude removes types from a union.
 *
*/
// type Primitive = string | number | boolean;
// remove union number types so that I can store string value
// const value3 : Exclude<Primitive, number> = 'Shakil ahmed';
// console.log(value3);
/**
 * ReturnType
 * - ReturnType extracts the return type of a function type.
 *
*/
// type pointGenerator = () => {x:number, y:number, age:number, name:string};
// const point:ReturnType <pointGenerator> = {
//     x:10,
//     y:20,
//     age:20,
//     name:'Shakil Ahmed',
// };
/**
 * Parameters
 * - Parameters extracts the parameter types of a function type as an array.
 *
*/
// type PointPrinter = (p: { x: number; y: number; }) => void;
// const point1: Parameters<PointPrinter>[0] = {
//     x: 10,
//     y: 20
// };
// console.log(point1);
