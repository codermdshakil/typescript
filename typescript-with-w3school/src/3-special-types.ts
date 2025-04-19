

/**
 * Type: any 
 * ----------
 * - When you use any, TypeScript stops checking type safety for that variable.
 * 
 * */ 


/*  Example without any */

// let u = 'shakil ahmed';
// u = 33; //  error 
// console.log(u);

/*  Example with any */

// let firstName :any = 'Shakil Ahmed';
// firstName = 22;
// console.log(firstName);


// ## When you are using any it stop checking data type and we can assign any type of data

// let data:any = 'Shakil Ahmed';
// data = 20;
// data = {isHired:false};
// data = ['first', 'second', 'third'];
// console.log(data);


// ## Alternative of any is : unknown

// let data: unknown = "hello";
// data = 34;
// console.log(typeof data);

// ## what is the differents between any type and unknown type ? 

// 1. With any type, you can do anything with it without any error.
// 2. With unknown type, you can't do anything until you check the data type of that variable. 
// 3. So, we can say that unknown is a safer version of any type.


// let data: unknown = "hello";

// data.toUpperCase() - error


// if( typeof data === 'string'){
//     console.log(data.toUpperCase()); // Ok
// }

// when we want to make some operations with unknow type value then we must check it type that's why unknown is safer more then any type



