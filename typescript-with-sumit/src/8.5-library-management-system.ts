/**
 * 🧠 Objective:
 * Manage a collection of books in a library — you can add books, borrow books, return books, and
 * view available books.
 * 
*/


// Create book class using this class you can make multiple book  objects
class Book{
    public id:number;
    public title:string;
    public author:string;
    public isAvailable: boolean = true;

    constructor(id:number, title:string, author:string){
        this.id = id;
        this.title = title;
        this.author = author
    }

    borrowBook(){
        if(this.isAvailable){
            this.isAvailable = false;
            console.log(`You borrowed  ${this.title} Book!`);
        }
        else{
            console.log(`Sorry, ${this.title} book already borrowed!`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`You returned "${this.title}"`);
      }
}


class Library{
    private books:Book[] = [];

    // add book to books array
    addBook(book:Book){
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library.`);
    }

    // show all books from array
    showAvailableBooks(){
        console.log("📚 Available Books:");
        this.books.forEach((book) => {
            if(book.isAvailable){
                console.log(`- ${book.title} by ${book.author}`);
            }
        })
    }

    // borrow book from books
    borrowBookById(bookid:number){

        const findedBook = this.books.find((b) => b.id === bookid);
        if(findedBook){
            findedBook.borrowBook();
        }
        else{
            console.log("Book not found!");
        }
    }

    // return book 

    // borrow book from books
    returnBookById(bookid:number){

        const findedBook = this.books.find((b) => b.id === bookid);
        if(findedBook){
            findedBook.returnBook();
        }
        else{
            console.log("Book not found!");
        }
    }


    

}


