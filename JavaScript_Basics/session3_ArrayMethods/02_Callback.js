// Callback Function 

// Jab bhi koi function ko hum as a argument pass karte hai toh wo function ko callback

// are the functions that are passed as arguments 

// let arr = [1,3];

// arr.forEach(function(a) {
//     console.log(a)
// })


// Event 


setInterval(function() {
    console.log("Print in 2 seconds")
}, 2000)

setInterval(() => {
    console.log("Print in 2 seconds")
}, 2000)


button.addEventListerner("click", function() {
    console.log("button clicked")
})

button.addEventListerner("click", () => {
    console.log("button clicked")
})