
/**
 * TypeScript Union | (OR) Types
 * 
 * - Union types are used when a value can be more than a single type.
 * - Allows a variable to have more than one type.
 * - Use When?	A value can come in multiple forms/types.
 * 
 * */ 


// names variable value can be number | string
const names1 : number| string = 'Shakil Ahmed';


function printId(id: number | string) {
    console.log("ID is: " + id);
}

// printId('first');
// printId(55);
  



