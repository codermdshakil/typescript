
/**
 * Null and Undefine
 * 
 * null -> means absence of value
 * undefine -> means not assign value
 * 
 * - Optional Chaning (?.)
*/

let value5: string | undefined | null = null;
value5 = 'hello';
// value5 = undefined;
// value5 = null; 
// console.log(value5);

/**
 * Nullish Coalescence 
 * 
 * - ?? it allows you to handle null and undefine type values
 * 
 * 
 * */ 

function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

// console.log(printMileage(null)); // Not Available
// console.log(printMileage(undefined)); // Not Available
console.log(printMileage(10)); // Mileage: 10
