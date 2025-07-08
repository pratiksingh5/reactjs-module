// Scope:

// Global
// Block
// Local


let a = 5; // global


if(a > 7) {
    let b = 20;
    console.log(b) // block {}
}



console.log(a);

function sayHello() {
    let name = "React";       // local
    console.log("name", name)
}

sayHello()