"use strict";
/**
 * Enums :
 *
 *
 */
// ## syntax for enum
// enum variableName {
//     right='Righit', // constant value
// }
// ## Numeric Enums - Default
// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// const currentDirection: number = CardinalDirections.North; // 0
// ## Numeric Enums with number value
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// ## Numeric Enums with string value
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1["North"] = "North";
    CardinalDirections1["East"] = "East";
    CardinalDirections1["South"] = "South";
    CardinalDirections1["West"] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
;
// console.log(CardinalDirections.North); // 1
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// console.log(StatusCodes.NotFound); // 404
/**
 * Summary:
 *
 * An enum in TypeScript is a special data type that defines a set of named constants to make code more readable and less error-prone.
 *
 * Key Points:
 *
 * 1. Syntax for Enums:
 *    - Enums are defined using the `enum` keyword followed by a name and a set of named constants.
 *
 * 2. Numeric Enums:
 *    - Default Numeric Enums: Enum members are assigned auto-incremented numeric values starting from 0.
 *    - Custom Numeric Enums: Enum members can be assigned specific numeric values.
 *
 * 3. Example Enums:
 *    - `CardinalDirections` demonstrates both default and custom numeric enums.
 *    - `StatusCodes` demonstrates enums with HTTP status codes as named constants.
 */
