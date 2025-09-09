import React from "react";
import { Link} from "react-router"
import { formatCurrency } from "../utils/currency";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch}  = useCart() 
  // const updatedPrice  = product.price;
  // console.log("product", product);

    // const item = {
    //   id: product.id,
    //   title: product.title,
    //   price: product.price,
    //   image: product.image,
    // }

  const addItem = () => {
      dispatch({type: "ADD", payload: { item: product}})
  }

  return (
    <div className="card group overflow-hidden hover:cursor-pointer">
      <Link to={`/product/${product.id}`} className="block p-4">
        <div className="h-48 w-full grid place-items-center overflow-hidden rounded-xl bg-neutral-50">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain transition group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <h3 className="mt-3 line-clamp-2 text-sm font-medium">
          {product.title}
        </h3>
        <div className="mt-1 text-neutral-500 text-xs line-clamp-2">
          {product.category}
        </div>
        <div className="mt-2 font-semibold">{formatCurrency(product.price)}</div>
      </Link>
      <div className="p-4 pt-0">
        <button className="btn btn-primary w-full" onClick={addItem}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
