// JS - Synchronous language
//     - Single Threading

// JS Engine:  program that executes JS code , available on browsers
// Google V8 -- google
// SpiderMonkey -- morzilla

// These all enginer are written in C++


// 2. 2. Truthy vs falsy values


// if(!0) {
//     console.log("Falsy")
// }

// if(!"") {
//     console.log("Falsy")
// }

// if(!undefined) {
//     console.log("Falsy")
// }

// if(!null) {
//     console.log("Falsy")
// }


// if("hello") {
//     console.log("Truthy")
// }

// if(23) {
//     console.log("Truthy")
// }

// if([]) {
//     console.log("Truthy")
// }

// if({}) {
//     console.log("Truthy")
// }

// new Function();

// new Array();

let array = [1,2,4]

const arr = new Array(3);

arr.push(4);

console.log(typeof(arr))