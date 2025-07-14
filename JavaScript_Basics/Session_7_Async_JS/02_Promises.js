// Promises :

// resolve , reject 

// States : Pending , Fulfilled , Rejected 

// once promise is completed
// .then and .catch function 


// let getData = () => {

// }

// converting in Promise 

// Syntax of promise creation
// function getDataNew() {
//     return new Promise(function(res, rej) {

//     })
// }

let getData = () => new Promise((resolve, reject) => {
    let result = true;

    if(result) {
        resolve("Promise resolved")
    }
    else {
        reject("Promise rejected")
    }
})



getData().then((data) => {
    // console.log("Hello")
    console.log(data)

})
.catch((err) => {
    // console.log("error aagya")
    console.log(err)
})

