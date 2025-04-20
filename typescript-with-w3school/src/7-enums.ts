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

enum CardinalDirections {
  North = 1,
  East = 2,
  South = 3,
  West = 4,
}

// ## Numeric Enums with string value

enum CardinalDirections1 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};

// console.log(CardinalDirections.North); // 1

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

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

