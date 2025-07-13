// EVERYTHING IN JAVASCRIPT HAPPENS INSIDE ON EXECUTION CONTEXT

// NODE ENVIRONMENT 

// console.log("Hey");
// console.log(this)  // In node environment is {}

// let obj = {
//     abc: "h"
// }

// JavaScript IS A SYNCHRONOUS LANGUAGE 

// One command at a time in a specific order 


// function square(num) {
//     var result = num * num;
//     return result
// };

// var squareOfTwo = square(2);
// var squareOfFour = square(4);



// let val1 = 10;
// let val2 = 5;

// function addSum(num1, num2) {
//     let total = num1 + num2;
//     return total
// }

// let result1 = addSum(val1, val2)
// let result2 = addSum(3,4);


let firstName = "John";
let lastName = "Doe";

function greet(nameToGreet) {
    const fullName = `${nameToGreet} ${lastName}`;
    return `Hello ${firstName}`
}

greet()