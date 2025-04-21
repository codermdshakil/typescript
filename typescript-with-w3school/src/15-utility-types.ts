

/**
 * Utility Types 
 * 
 * 
 * */ 


// Partials

interface Points{
    x:number;
    y:number;
}

// ## Partial changes all the properties in an object to be optional. 
// - Partial changes all the properties in an object to be optional.  

const point : Partial<Points>  = {}
point.x = 10;
point.y = 20;
// console.log(point);

// ## Required
// - Required changes all the properties in an object to be required.

interface Car{
    make:string;
    model:string;
    mileage?:number; // optional
}

const myCar : Required<Car> = {
    make:'Mercedes Bezs',
    mileage:10000,
    model:'GLS 4500'
};

// console.log(myCar);

// Error: if any property don't assign throw error -> Property 'model' is missing in type '{ make: string; mileage: number; }' but required in type 'Required<Car>'


// ## Record
// -  Record is a shortcut to defining an object type with a specific key type and value type.

//  - Record<string,number>
// -- string means -> properties name
// -- number measn -> properties value



const professionAndGoal : Record<string,number>  ={
    // string means -> properties name
    // number measn -> properties value
    'Salary' : 15000,
    'Goal': 1000000000000 
};

