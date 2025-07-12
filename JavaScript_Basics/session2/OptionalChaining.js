// let user = {
//     username: "John",
//     address: {
//         city: "Newyork",
//         // pinCode: 25784
//     }
// }


// if(user){
//     console.log(user.username)
// }

// if(user){
//     if(user.username) {
//         console.log(user.username)
//     }
// }

// console.log(user?.address?.city)
// console.log(user?.address?.pinCode)
// console.log(user?.contact?.email)


// Cannot read properties of undefined 


let user = {
    username: "John",
    address: {
        city: "Newyork",
        // coordinates : {
        //     lat: 1.1,
        //     long: 2.4
        // }
    }
}

// const latitiude = user.address.coordinates.lat;

// let latitiude;

// if(user.address) {
//     if(user.address.coordinates) {
//        latitiude = user.address.coordinates
//     }
// }

const latitide = user.address?.coordinates?.lat;

console.log("latitude", latitide)
