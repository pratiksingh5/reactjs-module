const fn =  () => new Promise((res, rej) => {
    res("hello")
})

console.log("one");

setTimeout(() => console.log("two"), 1000);

fn().then(() => console.log("three"))

console.log("four");


