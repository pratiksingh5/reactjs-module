
// "use strict"
// Splice and Slice 

// Slice 
// Used to create new array by extracting a portion of the original array 

// Syntax: Array.slice(startIndex, endIndex)

// IMP : Original Array will not be modified 

const languages = ["html", "css", "js", "python"];
// let webLanguages =

// languages.slice(1, 2);

const webLanguages = languages.slice(2);

// console.log(languages)
// console.log(webLanguages)



// SPLICE : Used to add or remove elements from an Array 

// Syntax: Array.slice(startIndex, deleteCount, item1, item2);

// IT MODIFIES THE ORIGINAL ARRAY


const newLanguages  = languages.splice(2, 1);

console.log(newLanguages)
console.log(languages) 

