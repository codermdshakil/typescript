"use strict";
// Enums: Enum (short for enumeration) is a special TypeScript feature used to define a set of named constant values.
// create  enum
var Rtype;
(function (Rtype) {
    Rtype[Rtype["SUCCESS"] = 0] = "SUCCESS";
    Rtype[Rtype["FAILURE"] = 1] = "FAILURE";
    Rtype[Rtype["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
})(Rtype || (Rtype = {}));
const response2 = {
    status: 300,
    type: Rtype.SUCCESS,
    data: 'test',
};
// console.log(response2);
// Example - 1; 
// enum Direction {
//     NORTH,
//     SOUTH,
//     EAST,
//     WEST
//   }
// let dir: Direction = Direction.NORTH;
// console.log(dir); // Output: 0
// Example - 2 with Custom value 
var Direction;
(function (Direction) {
    Direction["NORTH"] = "Nourth";
    Direction["SOUTH"] = "South";
    Direction["EAST"] = "East";
    Direction["WEST"] = "West";
})(Direction || (Direction = {}));
let dir = Direction.NORTH;
console.log(dir); // Output: Nourth - custom value
