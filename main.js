"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello world";
console.log(message);
// It only support let and const variable declaration
var x = 10;
var y = 10;
// This solve change of error occur due to var and make code better
// Variable type in TS are number, boolean, string
var age = 18;
var value = true;
var name = "Hello";
var sentance = "My name is ".concat(name, "\nMy age is ").concat(age);
console.log(sentance);
// Use of variable data type is (Static Type checking) and also making intellisence like only provide particular type functions
// Two more variable type null, undefined
var str = null;
var con = undefined;
console.log(str, con);
// Array in TypeScript
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Chris", 20];
var num;
num = 20;
num = true;
var data;
// Also a variable type
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
add(2, 3);
function Fullname(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: 'Kholi',
    lastname: 'Virat'
};
Fullname(p);
