import React, { useEffect, useState } from "react";

// const products = [
//   {
//     id: 1,
//     title: "Fjallraven Backpack",
//     price: 109.95,
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   },
//   {
//     id: 2,
//     title: "Mens Casual Slim Fit",
//     price: 22.3,
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//   },
//   {
//     id: 3,
//     title: "White Gold Plated Princess",
//     price: 9.99,
//     image: "https://fakestoreapi.com/img/71ya6z9Z3dL._AC_UL640_QL65_ML3_.jpg",
//   },
// ];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log("Here we will fetch products");

    // const getAllProducts = () => {
    //   fetch("https://fakestoreapi.com/products").then((response) => {
    //     console.log("response", response);
    //     response.json().then((data) => {
    //       console.log("data", data);
    //     });
    //   });
    // };

    const getAllProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        console.log("response", response);

        const data = await response.json();
        console.log("data", data);

        setProducts(data);
      } catch (err) {
        console.log("error aaya", err);
        setIsError(true);
      }
    };

    getAllProducts();
  }, []);

  //   console.log("data", data)

  console.log("isError", isError);

  if (isError) {
    return <div>Error in API CAll</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Product List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products &&
          products.length &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-indigo-600 font-semibold text-md">
                ${product.price}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
