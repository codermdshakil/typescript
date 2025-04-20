"use strict";
/**
 * ------------------------
 * Type Alias
 * -------------------------
 *
 * 1. Primitive Type Alias
 * 2. Object Type Alias
 * 3. Union Type Alias
 * 4. Function Type Alias
 *
 * declare -> type variableName = {name:string, age:numer};
 *
 * Use type when:
 * ---------------
 *
 * - You need unions, primitives, tuples, or complex combinations
 * - You want a single, precise definition that won't be reopened
 * - You're dealing with function types or non-object data
 *
 *
 * ➕ Can extend / merge multiple types	✅ With & (type)	✅ With extends (interface)
 *
 * --------------
 * Interface
 * --------------
 *
 * declare -> interface variableName {name:string, age:numer};
 *
 * Use interface when:
 * -------------------------
 * - You're defining class-based objects or extending object types
 * - You want to use declaration merging
 * - You want better tooling for classes
 *
 *
 * 💬 Simple Rule of Thumb
 * 📦 Use interface for objects/classes.
 * 🛠️ Use type for everything else.
 *
*/
;
