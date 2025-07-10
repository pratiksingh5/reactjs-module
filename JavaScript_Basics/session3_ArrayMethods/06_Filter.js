let numbers = [1, 34, 67, 43, 51];


let filteredArray = numbers.filter((num) => {
    return num // Is line me hum condition de skate
});

let filteredArray2 = numbers.filter((num) => {
    return num > 50 // Is line me hum condition de skate
});

let MapFilter = numbers.map((num) => {
    return num > 50 // Is line me hum condition de skate
});

// let MapFilter = numbers.map((num) =>  num > 50);

// console.log("filteredArray2", filteredArray2)
// console.log("MapFilter", MapFilter);

const products = [
  {
    id: 1,
    productName: "tshirt",
    price: 50,
  },
  {
    id: 2,
    productName: "jeans",
    price: 500,
  },
  {
    id: 3,
    productName: "shoes",
    price: 200,
  },
];


console.log("products", products);

let deleteId = 2

let updatedProducts = products.filter((product) => {
    return product.id !== deleteId
})

console.log("updatedProducts", updatedProducts);

