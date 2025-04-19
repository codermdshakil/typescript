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
