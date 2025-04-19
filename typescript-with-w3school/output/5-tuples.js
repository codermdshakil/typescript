"use strict";
/**
 * ## Tuples -
 *
 * - Fixed-length,
 * - ordered,
 * - typed array
 * - Each element can have different type
 *
 * # analogy: A train with fixed seats — each seat (position) has a specific passenger type (data type).
 *
 * Different between tuple vs array
 *
 * - Tuple = [string, number] → fixed structure, mixed types
 * - Array = string[] → flexible list, same types
 *
 *
 * Feature	                Tuple	                                        Array
 * ---------------------------------------------------------------------------------------
 * Length	                ✅ Fixed	                                    ❌ Flexible (can grow/shrink)
 *
 * Types	                ✅ Types are fixed per position	            ❌ Usually one type (can mix with any[] though)
 *
 * Position matters	        ✅ Yes (each spot has a specific meaning)	❌ No (same kind of values)
 *
 * Usage	                Small, known, structured data	               List of similar items
 *
 * Type enforcement	Strong : TypeScript checks each position's type	       Weak — TypeScript checks overall item type
 *
 *
 * */
// ## define out tuple with values
let outTuples = [20, true, 'Shakil'];
// outTuples.push(100);
// outTuples.push('Noyon Rahman');
// outTuples.push('Nadim hassan');
// outTuples.push(undefined) // error
// outTuples.push({name:'noyon', age:20}) // error
// readonly tuple
const ourReadonlyTuple = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('12'); // error because readOnly
// ## Named Tuples : Named tuples allow us to provide context for our values at each index.
// named tuple
const graph = [55.2, 41.3];
// destructuring tuple
const [x, y] = graph;
// console.log(x); // 55.2
// console.log(y); // 41.3
