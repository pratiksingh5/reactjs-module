// ES 5 
// Promises 


// ES6 
// async await to handle promises 

// currently promises is handle by "then" and "catch" 

// JS allows use to write async code in a synchronous way 

// syntatic sugar 

// IMPORTANT 

// 1. async function always return a promise 
// 2. await keyword pause the execution of the code until the promise resolve / reject 
// 3. After the await rest of the code gets in microtask queue 


// const getUser3 = async() =>  {
//     const user = {
//         name: "John"
//     };

//     console.log("one")
//     console.log("two")


//     await user;

//     console.log("three")
//     console.log("four")

// }


// Microtask Queue 


// Promise.resolve("hello")   // 1

// const promiseIntro = () => new Promise((resolve, reject) => {
//     resolve("hello")
// })

// async function intro() {  // 2
//     return "hello"
// }

// const sayHello = async () => {  // 3
//     return "hello"
// }


const one  = () => Promise.resolve("one");

// one().then((data) => {
//     console.log("data", data)
// })
 
const test = async () => {
    const data = await one();
    console.log("data await", data)
}

test()