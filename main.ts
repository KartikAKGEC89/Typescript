export {}

let message = "Hello world";
console.log(message);


// It only support let and const variable declaration

let x = 10;
const y = 10;

// This solve change of error occur due to var and make code better


// Variable type in TS are number, boolean, string

let age: number = 18;
let value: boolean = true;
let name: string = "Hello";

let sentance: string = `My name is ${name}
My age is ${age}`;

console.log(sentance);

// Use of variable data type is (Static Type checking) and also making intellisence like only provide particular type functions
// Two more variable type null, undefined

let str: null = null;
let con: undefined = undefined;

console.log(str, con);

// Array in TypeScript

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ["Chris", 20];


let num: number | boolean;
num = 20;
num = true;


let data: any;  
// Also a variable type


function add(num1: number, num2: number = 10): number {
    if(num2){
        return num1 + num2;
    }

    return num1;
}

add(2, 3);

interface Person {
    firstname: string;
    lastname: string;
}

function Fullname(person: Person) {
    console.log(`${person.firstname} ${person.lastname}`);
}

let p = {
    firstname: 'Kholi',
    lastname: 'Virat'
};

Fullname(p);