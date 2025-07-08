// let teams = ["csk", "js", "css"];

// teams.forEach(function(t, index) {
//     console.log("t", t)
//     console.log("index", index)
// })

const products = [
  {
    productName: "tshirt",
    price: 50,
  },
  {
    productName: "jeans",
    price: 500,
  },
  {
    productName: "shoes",
    price: 200,
  },
];

products.forEach(function(product) {
    // console.log("product Name", product.productName)
    // console.log("product Price", product.price);
    if(product.price > 100) {
        console.log("product Price", product.price);
    }

})
