

// create a player class

class Player{

    name:string;
    age:number;
    country:string

    constructor(n:string, a:number, c:string){
        this.name = n;
        this.age = a;
        this.country = c;
    }

    // method
    play(){
        console.log(`${this.name} is playing!`);
    }

    // method
    ageIs(){
        console.log(` ${this.name} age is ${this.age}!`);
    }
}

const student2 = new Player('Shakil', 20, 'bd');
const student3 = new Player('nadim', 20, 'bd');
const student4 = new Player('noyon', 20, 'bd');
// console.log(student2);


const players:Player[] = [];

// push values to players array
players.push(student2);
players.push(student3);
players.push(student4);

// foreach every element
players.forEach((player) => console.log(player.name));
