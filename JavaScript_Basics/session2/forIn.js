const teams = {
    mi: "mumbai indians",
    csk: "chennai super kings",
    kkr: "kolkata knight riders"
}


// for (const key in teams) {
//     console.log(`${key} is for ${teams[key]}`)
// }

// key -- property
// obj[key] -- value


const programming = ["html", "css", "js"];

for (const key in programming) {
    console.log(`key ${key}`)
    console.log(`programming key ${programming[key]}`)
}
