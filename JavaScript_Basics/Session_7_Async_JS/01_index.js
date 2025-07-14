// Synchronous Code -- line by line execute, and block the next line
// Asynchronous Code --

// Pizza Order 

// order pizza --- 30 minutes

// Assignments
// Videos

// delivery

// JS is a synchronous language par hum JS me async functionality use kar sakte hai with the help of Event loop. 


// setInterval
// setTimeout
// fetch
// axios
// XMLHttpRequest
// Promise -- VIP - Microtask Queue
// async await  - VIP -  Microtask Queue

// ye sare async code hai 


// Jo bhi hum code likenge wo Synchronous code hoga 


console.log("one");
setTimeout(() => console.log("two"), 0);
console.log("three");
setTimeout(() => console.log("four"), 0);
console.log("five");


// Web APIS 

// Login -- 
// ---Aync code 
// login method started 

// DATABASE OPERATION 

// login function end 

// function verifyUser() {
//     console.log("verify user")
// };


// function login() {
//     console.log("started login process");
//     verifyUser(); // 5 seconds async --> jab tak ye function execute nhi hoga tab tak next line run nhi hoga

//     email = isValidEmail();

//     redirctToHomePage();

//     console.log("login successfull")
// }


// Async JS

// Promises -- ES5 -- .then

// ES6 
// async await ---> Promises