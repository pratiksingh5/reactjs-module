import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 0,
    title: "Product 1",
    price: 0.1,
    description: "string",
    category: "string",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
  },

  {
    id: 1,
    title: "Product 2",
    price: 100,
    description: "string",
    category: "string",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
