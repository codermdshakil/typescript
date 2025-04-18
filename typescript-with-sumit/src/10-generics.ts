
/**
 * Generics: Generics allow you to write reusable, flexible, and type-safe code
 * 
*/


// <T> recived data type and use it its called generics

// here dynamically recived data type and use that data type
interface APIresponse<T>{
    status:number;
    type:string;
    data:T
}


// using <object> that means sent object data 
const response1: APIresponse <object> ={
    status:300,
    type:'good',
    data:{
        name:'test',
        age:30
    }
}

console.log(response1);
