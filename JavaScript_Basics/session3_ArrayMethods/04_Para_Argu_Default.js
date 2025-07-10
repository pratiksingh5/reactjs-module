function greet(name) { // name -- parameter
    console.log("Hello" + name)
}


// greet("Pratik") // Arguments


// Default Value 

// if argument is not passed, we can assign default value 

function greet2(name = "Guest") { // name -- parameter
    console.log("Hello " + name)
}

greet() // Hello Guest
greet2("React") // Hello React