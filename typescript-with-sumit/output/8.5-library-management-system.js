"use strict";
/**
 * 🧠 Objective:
 * Manage a collection of books in a library — you can add books, borrow books, return books, and
 * view available books.
 *
*/
// Create book class using this class you can make multiple book  objects
class Book {
    constructor(id, title, author) {
        this.isAvailable = true;
        this.id = id;
        this.title = title;
        this.author = author;
    }
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You borrowed  ${this.title} Book!`);
        }
        else {
            console.log(`Sorry, ${this.title} book already borrowed!`);
        }
    }
    returnBook() {
        this.isAvailable = true;
        console.log(`You returned "${this.title}"`);
    }
}
