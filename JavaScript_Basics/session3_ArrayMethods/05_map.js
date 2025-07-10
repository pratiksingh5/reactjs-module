let array = [1,2,3,4];


let forEachResult = array.forEach((num) => {
    // console.log(num * 2);
    return num * 2
})

let MapResult = array.map((num) => {
    // console.log(num * 2);
    return num * 2
})


console.log("forEachResult", forEachResult)
console.log("MapResult", MapResult)


// forEach Vs Map 
// forEach - Doesnt return anything
// Map: Return Array 



// Map -- Array ---> Usko Modify (HAR EK ELEMENT INSIDE THE ARRAY) --> New modified array return karega 


// let MapResult2 = array.map((num) => {
//     // console.log(num * 2);
//     return num * num
// })

// let MapResult2 = array.map((num) => {
//     return num * num
// })

let MapResult2 = array.map((num) => num + 5)

// AGAR {} CURLY BRACKET HAI TOH HUM RETURN KEYWORD USE KARENGE
// AUR AGAR {} NHI HAI TOH DIRECT RETURN KARENT USING () (React)


console.log("MapResult2", MapResult2)
