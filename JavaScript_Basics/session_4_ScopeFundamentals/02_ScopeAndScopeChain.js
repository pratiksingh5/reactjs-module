// Scope: 

// Kis variable ki accesibility kahan tak hai
// determines varibales can be accessed and cannot be 

// Global :access anywhere
// Local: acess within a function 
// Block access within a block {} 


// SCOPE CHAIN


// First it will try to find the variable in local Scope

// Until it reaches the global Scope 

// Process is called Scope Chain 


// Note: Hunting: Inner Function To Outer Function 

// X -- Outer to Inner NHI HOTA


function outer() {
    let outerVar = "Outside hun";

    function inner() {
        let innerVar = "Inside hun";
        // console.log(outerVar)
    };

    inner();
    console.log(innerVar)
}

// outer()


let count = 1;

function outer() {
    let count = 2;

    function inner() {
        console.log(count)
    };

    inner()
}

outer()