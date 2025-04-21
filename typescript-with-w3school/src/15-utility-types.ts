

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

