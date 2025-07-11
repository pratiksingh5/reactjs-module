// let, var, const --> keywords --> variable declare


// 0. JS Vesion 
// ES5 Vs ES6 
// ES5 --> old --> var
// ES6 --> new --> const, let


// *. Declaration and Definition 

// let num = 5  declare and initialize
// let num;     declare 
// num = 5;    initialize




// 1. 
// const -> value remains fixed 
// let and var => value can be changed 

const a = 5;
let b = 8;

// a = 8;
b = 10

// console.log(b)


// . Declaration 

let c = 7;

// let c = 10;  let can't be redecalre
// const a = 10;   const can't be redecalre 


var d = 7;

// var d = 10;  var can be redecalre 

// console.log(d)



// 3. Scope Based 

// let and const => Block Scope
// var ==> global/Function Scope 


// let num = 5;
// if(true) {
//     let num = 8;
//     console.log(num)
// }

// var num = 5;
// if(true) {
//     var num = 8;
//     console.log(num)
// }

// let num = 5;
// if(true) {
//     var num2 = 8;
//     console.log(num)
// }


// for (let i = 0; i < 3 ; i++) {
//     console.log("i", i)
// }

// function printNumber() {
//     let i = 10;
//     for (let i = 0; i < 3 ; i++) {
//         console.log("first", i)
//     }

//     console.log("seconnd", i)
// }

function printNumber() {
    // let i = 10;
    for (var i = 0; i < 3 ; i++) {
        console.log("first", i)
    }

    console.log("seconnd", i)
}

printNumber()



// 4. Hoisting

//  Var can be Hoisted but value will be undefined
//  let and const also Hoisted but will be Reference
