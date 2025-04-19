"use strict";
/**
 * Object types in TypeScript
 *
 * - Define object
 * - Optional perperties
 *
 * 🎯 Summary
 *
 * ✅ Object = key-value pairs
 * ✅ Can hold multiple data types
 * ✅ Access: dot, bracket, dynamic
 * ✅ Add: direct, bracket, spread
 * ✅ Delete: delete, destructure
 * ✅ CRUD = Create, Read, Update, Delete operations on objects
 *
 * */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const users = [
    {
        id: 1,
        name: "John",
        isActive: true,
        email: null,
        hobbies: ["reading", "coding"],
        address: {
            city: "Dhaka",
            zip: 1205,
        },
    },
    {
        id: 2,
        name: "Sarah",
        isActive: false,
        email: "sarah@example.com",
        hobbies: ["drawing", "music"],
        address: {
            city: "Chittagong",
            zip: 4000,
        },
    },
    {
        id: 3,
        name: "Rafiq",
        isActive: true,
        email: "rafiq@email.com",
        hobbies: ["football", "photography"],
        address: {
            city: "Sylhet",
            zip: 3100,
        },
    },
    {
        id: 4,
        name: "Lima",
        isActive: true,
        email: null,
        hobbies: ["writing", "traveling"],
        address: {
            city: "Rajshahi",
            zip: 6200,
        },
    },
    {
        id: 5,
        name: "Nayeem",
        isActive: false,
        email: "nayeem@example.com",
        hobbies: ["gardening", "chess"],
        address: {
            city: "Khulna",
            zip: 9100,
        },
    },
];
// console.log(users);
/**
 *
 * 🔍 1. Access Object Elements in Different Ways
 * - 1. Dot Notation (.)
 * - 2. Bracket Notation (['propertyName'])
 * - 3. Dynamic key access (variable)
 *
 * */
// 1. Dot Notation (.)
// console.log(users[0].name);
// console.log(users[1].email);
// 2. Bracket Notation (['propertyName'])
// console.log(users[2]["email"]);
// console.log(users[3]["hobbies"]);
// 3. Dynamic key access (variable)
// const key = "name";
// console.log(users[4][key]);
// console.log(users[4][key as keyof User]);
/**
 * ➕ 2. Add New Properties in Different Ways
 *
 * 1. Add New Property (Directly using dot notation)
 * 2. Add New Property with (Bracket Notation)
 * 3. Add Property with (Spread Operator)
 */
// 1. Add New Property (Directly using dot notation)
// users[0].name = "Shakil AHmed";
// 2. Add New Property with (Bracket Notation)
// users[1]["email"] = "ahmedshakil0512@gmail.com";
// 3. Add Property with (Spread Operator)
// const updatedUser = { ...users[2], role: "admin" };
/**
 * ❌ 3. Delete Properties in Different Ways
 * 1. Using delete Keyword
 * 2. Destructuring to Remove
 */
// 1. Using delete Keyword
// delete users[0].name;
// 2. Destructuring to Remove
const _a = users[1], { email } = _a, others = __rest(_a, ["email"]);
// console.log(others); // removed email
