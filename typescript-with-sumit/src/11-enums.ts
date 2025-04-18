
// Enums: Enum (short for enumeration) is a special TypeScript feature used to define a set of named constant values.

// create  enum
enum Rtype {SUCCESS, FAILURE, UNAUTHENTICATED}

interface APIresponse1<T>{
    status:number;
    type:Rtype;
    data:T;
}


const response2: APIresponse1 <string> ={
    status:300,
    type:Rtype.SUCCESS,
    data:'test',
}

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
enum Direction {
    NORTH = 'Nourth',
    SOUTH = 'South',
    EAST = 'East',
    WEST = 'West'
  }
  
let dir: Direction = Direction.NORTH;
console.log(dir); // Output: Nourth - custom value


