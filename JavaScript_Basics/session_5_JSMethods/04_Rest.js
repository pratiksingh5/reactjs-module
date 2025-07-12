// Parameter / Argumennts 

// Array or Object ko as an arguments pass kar skte 

// function sayNamasteAll(greeting, names) {
//     for(let name of names) {
//         console.log(`${greeting} ${name}`)
//     }
// };

function sayNamasteAll(greeting, ...names) {
    for(let name of names) {
        console.log(`${greeting} ${name}`)
    }
};

const users = ["Pratik", "Nupur", "Amol"]

// sayNamasteAll("Good Morning", "Pratik", "Nupur", "Amol", "Abhay");


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1,3,4,5,6))