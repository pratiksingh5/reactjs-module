import React from "react";

const Product = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
      <p className="font-bold text-blue-600">${product.price}</p>
    </div>
  );
};

export default Product;
