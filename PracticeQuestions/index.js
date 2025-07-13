// Create a function `repeatAction` that takes a function and a number `n`, and calls the function `n` times.


function repeatAction(callback, n) {
    for(let i = 0; i < n ; i++) {
        callback()
    }
}

// repeatAction(function(){
//     console.log("repeatAction")
// } , 3)

let arr = ["1", "2", "3"]

arr.splice(1,1,"5");

console.log(arr)