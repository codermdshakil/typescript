

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



/**
 * ## Partial 
 * - Partial changes all the properties in an object to be optional.  
 * */ 


// interface Points{
//     x:number;
//     y:number;
// }

// const point : Partial<Points>  = {}
// point.x = 10;
// point.y = 20;
// console.log(point);

/**
 * ## Required
 * - Required changes all the properties in an object to be required.
 * 
*/

// interface Car{
//     make:string;
//     model:string;
//     mileage?:number; // optional
// }

// const myCar : Required<Car> = {
//     make:'Mercedes Bezs',
//     mileage:10000,
//     model:'GLS 4500'
// };

// console.log(myCar);

// Error: if any property don't assign throw error -> Property 'model' is missing in type '{ make: string; mileage: number; }' but required in type 'Required<Car>'





/**
 * ## Record
 * - Record is a shortcut to defining an object type with a specific key type and value type.
 * - Record<string,number>
 * -- string means -> properties name
 * -- number measn -> properties value
 * 
*/




// const professionAndGoal : Record<string,number>  ={
//     // string means -> properties name
//     // number measn -> properties value
//     'Salary' : 15000,
//     'Goal': 1000000000000 
// };


/**
 * ## Omit
 * - Omit removes keys from an object type.
 * - using Omit i can say which key need to removed
 * - Omit <Persons1, 'location' | 'age'> that means 'location' or 'age' key will removed from
 * nadimHassan object
 */


// interface Persons1 {
//     name:string;
//     age:number;
//     location?:string;
// }

// here using omit removed "location" and "age" property just from nadimHassan Object
// const nadimHassan : Omit <Persons1, 'location' | 'age'>= {
//     name:'Nadim Hassan',
//     // age:20,
//     // location:'Khilghaw' 
// };

// here need all properties because i don;t use Omit here
// const noyonRahman : Persons1 = {
//     name:'Noyon',
//     age:22,
//     location:'barigong'
// }

/**
 * 
 * Pick
 * - Pick removes all but the specified keys from an object type.
 * 
*/

interface Person3 {
    name: string;
    age: number;
    location?: string;
}
  
// * - Pick removes all but the specified keys from an object type. 

const userObj: Pick <Person3, 'name'> = {
    name:'Shakil Ahmed',
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



