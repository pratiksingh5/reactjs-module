// 1. Primitive :

// numbers, string, boolean --- Primitve -- Immutable


// 2. Non - Primitive -- Mutable


let person1 = {
    name: "John",
    age: 20
};

let person2 = person1;

// person2.name = "Harry"

// console.log("person2.name",person2.name)
// console.log("person1.name",person1.name);


let person3 = {...person1};

// console.log(person3);


person3.name = "Harry";

console.log("person3.name",person3.name)
console.log("person1.name",person1.name);