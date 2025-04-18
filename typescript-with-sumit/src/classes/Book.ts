// Create book class using this class you can make multiple book  objects

// import IsBook interfaces

import {IsBook} from '../interfaces/IsBook.js';


export class Book implements IsBook{
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
