// Behaviour of JavaScript to declare variable at top 

// console.log(a);
var a = 10;  // undefined


var a;
// console.log(a);
a = 10;


// console.log(b)
// let b = 20; // ReferenceError: Cannot access 'b' before initialization


// let b;
// console.log(b);
// b - 20


// Function Definition and Function Expression 


// Function Definition -- Hoisted
// Function Expression - Cannot be hoisted because of let 

// console.log(sum(5,6))

// Function Definition 
function sum(x,y) {
    return x + y
}

//  Function Expression 

// console.log("sum", sumResult(3, 4)) // ReferenceError: Cannot access 'sumResult' before initialization


let sumResult = function sum(x,y) {
    return x + y
};

console.log(arrowSum(4,5))

const arrowSum = (x,y) =>  x + y;



// console.log("sum", sumResult(3, 4))


// let, const -> Hoisted but as refrerence error
// var - hoisting  but undefined
// function - can be hoisted 
// function expression can't be hoisted 