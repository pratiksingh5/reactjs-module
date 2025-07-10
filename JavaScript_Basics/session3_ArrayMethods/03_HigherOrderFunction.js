// HIgher Order Function 

// are functions that take other function as arguments 

// return function as result 


function applyTwice(callback, args) {
    return callback(args)
};

// console.log(applyTwice(Math.sqrt, 16))

// console.log(Math.sqrt(36))


function greet(name, callback) {
    console.log("Good Morning " + name);
    // callback()
}


// greet: HigherOrder Function
// sayBye: callback function 


function sayBye() {
    console.log("Bye Tata")
}

greet("Amol", sayBye)

let a = "JS"

function hello(a="CSS") {
    console.log(a)
}

hello()