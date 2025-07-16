function step1(callback) {
    console.log("Step 1");
    callback()
}

function step2(callback) {
    console.log("Step 2");
    const a = 6;
    a = 8;
    callback()
}

function step3(callback) {
    console.log("Step 3");
    callback()
}

function step4() {
    console.log("Step 4");
    // callback()
}
// step1(() => {
//     step2(() => {
//         step3(() => {
//             step4()
//         })
//     })
// })


// CALLBACK HELL 

// Use Async Await 