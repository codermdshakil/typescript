export class Library {
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
