"use strict";
/**
 * TypeScript Casting (as, <>)
 *
 * - casting using as keyword
 * - casting using <>
 *
 * Method           | Example                       | Use Case
 * --------------------------------------------------------------------------------------
 * as syntax        | value as string               | ✅ Safe and preferred in most cases
 * ----------------------------------------------------------------------------------------
 * <type>           | <string>value                 | ✅ Valid, but not for JSX (React)
 * ----------------------------------------------------------------------------------------
 * Double cast      | value as unknown as SomeType  | ⚠️ Dangerous — use only when sure
 *
 *
 * when working with types where it's necessary to override the type of a variable, such as when
 * incorrect types are provided by a library.
 *
*/
// Casting using as keyword
const myVar = "Hello";
// console.log((myVar as string).length); // 5
// ## Casting using <>
const myVar2 = "Shakil Ahmed";
// console.log((<string>myVar2).length);
