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
class Library {
    constructor() {
        this.books = [];
    }
    // add book to books array
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library.`);
    }
    // show all books from array
    showAvailableBooks() {
        console.log("📚 Available Books:");
        this.books.forEach((book) => {
            if (book.isAvailable) {
                console.log(`- ${book.title} by ${book.author}`);
            }
        });
    }
    // borrow book from books
    borrowBookById(bookid) {
        const findedBook = this.books.find((b) => b.id === bookid);
        if (findedBook) {
            findedBook.borrowBook();
        }
        else {
            console.log("Book not found!");
        }
    }
    // return book 
    // borrow book from books
    returnBookById(bookid) {
        const findedBook = this.books.find((b) => b.id === bookid);
        if (findedBook) {
            findedBook.returnBook();
        }
        else {
            console.log("Book not found!");
        }
    }
}
