//  ?? 

// provide default value to null variable ;


let name =  null;

let displayName = name ?? "Guest";

console.log("displayName", displayName);


let age = 0;

let user1Age = age || 18;
let user2Age = age ?? 18;


console.log("user1Age", user1Age)
console.log("user2Age", user2Age)
