// Create a function `repeatAction` that takes a function and a number `n`, and calls the function `n` times.


function repeatAction(callback, n) {
    for (let i = 0; i < n; i++) {
        callback()
    }
}

// repeatAction(function(){
//     console.log("repeatAction")
// } , 3)

let arr = ["1", "2", "3"]

arr.splice(1, 1, "5");

// console.log(arr)


//Create a promise that resolves to `"First"`, and inside its `.then()` handler, 
// return another promise that resolves to `"Second"`. Log both results in sequence.
//  Promise.resolve().then (() => {
//    console.log("First")
//  })
//  .then(() => {
//    console.log("Second")
//  })
//  //.......
//  const result1 = new Promise((res,rej) =>{})



// .then(() =>console.log("first"))
// .then(() => console.log("second"))


const getUser = () => new Promise((res, rej) => {
    const user = {
        name: "John"
    };

    if (user) {
        // res(user)
        res("First")
    }
    else {
        rej("User Not Found")
    }
})


const getUser2 = () =>  {
    const user = {
        name: "John"
    };

    return user;
}

// returns object


const getUser3 = async() =>  {
    const user = {
        name: "John"
    };

    return user;
}

// returns promise



const getUserPost = () => new Promise((resolve, reject) => {
    const posts = [ {
        id: 1,
        title: "New Post"
    }]

    if(posts) {
        // resolve(posts)
        resolve("Second")
    }
    else {
        reject("Post Not Found")
    }
})

getUser().then((data) => {
    console.log(data);
    if(data) {
        getUserPost().then((posts) => {
            console.log(posts)
        })
    }
})