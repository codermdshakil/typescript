/**
 * 🧠 Objective:
 * Manage a collection of books in a library — you can add books, borrow books, return books, and
 * view available books.
 *
*/
// import Book and Library classes using module system
import { Book } from './classes/Book.js';
import { Library } from './classes/Library.js';
// // Create book class using this class you can make multiple book  objects
// class Book{
//     public id:number;
//     public title:string;
//     public author:string;
//     public isAvailable: boolean = true;
//     constructor(id:number, title:string, author:string){
//         this.id = id;
//         this.title = title;
//         this.author = author
//     }
//     borrowBook(){
//         if(this.isAvailable){
//             this.isAvailable = false;
//             console.log(`You borrowed  ${this.title} Book!`);
//         }
//         else{
//             console.log(`Sorry, ${this.title} book already borrowed!`);
//         }
//     }
//     returnBook() {
//         this.isAvailable = true;
//         console.log(`You returned "${this.title}"`);
//       }
// }
// class Library{
//     private books:Book[] = [];
//     // add book to books array
//     addBook(book:Book){
//         this.books.push(book);
//         console.log(`Book "${book.title}" added to the library.`);
//     }
//     // show all books from array
//     showAvailableBooks(){
//         console.log("📚 Available Books:");
//         this.books.forEach((book) => {
//             if(book.isAvailable){
//                 console.log(`- ${book.title} by ${book.author}`);
//             }
//         })
//     }
//     // borrow book from books
//     borrowBookById(bookid:number){
//         const findedBook = this.books.find((b) => b.id === bookid);
//         if(findedBook){
//             findedBook.borrowBook();
//         }
//         else{
//             console.log("Book not found!");
//         }
//     }
//     // return book 
//     // borrow book from books
//     returnBookById(bookid:number){
//         const findedBook = this.books.find((b) => b.id === bookid);
//         if(findedBook){
//             findedBook.returnBook();
//         }
//         else{
//             console.log("Book not found!");
//         }
//     }
// }
const myLibrary = new Library();
const book1 = new Book(1, "The Alchemist", "Paulo Coelho");
const book2 = new Book(2, "Atomic Habits", "James Clear");
const book3 = new Book(3, "Deep Work", "Cal Newport");
// book added to myLibrary
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
// borrow book using id 2
myLibrary.borrowBookById(2);
myLibrary.borrowBookById(2); // not find book
// return book of id 2
myLibrary.returnBookById(2);
myLibrary.showAvailableBooks();
// console.log(myLibrary);
/**
 * Implement Module system steps:
 *
 * Some things are need to changes in tsconfig.json file
 * - target = "es6"
 * - module = "es2015"
 * - In index.html added  <script type = "module">
 *
 * 1. create classes folder in src folder
 * 2. In classes folser create Book.ts class file
 * 3. import {Book} from './classes/Book.js' here must should use [.js] extention
 *
 *
*/
