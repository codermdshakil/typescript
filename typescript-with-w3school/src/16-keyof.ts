
/**
 * TypeScript Keyof
 * 
 * - keyof is simpley extract properties from object
 * 
 * */ 


interface Person4 {
    name:string,
    age:number,
    fee:number
}

// create a Person using Person 

const user1 : Person4 = {
    name:'Shakil Ahmed',
    age:20,
    fee:10000
};

function printPropertiesOfUser(person:Person4, property: keyof Person4){
    console.log(`Print person properties ${property}: ${person[property]}`);
}

// using keyof extract name property from person obj
// printPropertiesOfUser(user1, 'name'); // name: Shakil



