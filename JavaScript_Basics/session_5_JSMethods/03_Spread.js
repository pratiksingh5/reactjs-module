// JS : Object and Array  -- Mutable

// Denoted by ... 

// 1. Copying an Array 

const original = [1,2,3];

// const duplicateArray = original;

// duplicateArray.pop(2);

// console.log(duplicateArray);
// console.log(original)

const copiedArray = [...original];

copiedArray.pop(2);
// console.log(copiedArray)
// console.log(original)

// 2. Merging the Array 

let arr1 = [2,4,6];
let arr2 = [1,3,5];

// let arr3 = arr1.concat(arr2); 
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);


let userData  = {
    userName : "pratik",
    role: "developer",
    email: "pratik@gmail.com"
};

// Object.keys((i) => console.log(s))

const filterData = {};
const keys = Object.keys(userData);
const values = Object.values(userData);
const enteries  = Object.entries(userData)

// To convert Object to Array 
// because these all return result as array 
console.log("keys", keys);
console.log("values", values);
console.log("enteries", enteries);


keys.forEach((key) => {
    if(key !== "email") {
    filterData[key] = userData[key]
    }
});

// console.log('filterData',filterData)

// let userData  = {
//     userName : "pratik",
//     email: "pratik@gmail.com"
// };



let newData = {  role: "developer"}

// let updatedUserData = {...userData, role: "developer"};
// let updatedUserData = {...userData, newData};
let updatedUserData = {...userData, ...newData};

// console.log(updatedUserData)