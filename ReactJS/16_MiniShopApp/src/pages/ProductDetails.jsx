import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { api } from "../api/axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //   console.log("id", id);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`/products/${id}`);
        // console.log("data", data);
        setProduct(data);
      } catch (err) {
        setError("Failed to Load Product");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
    console.log("product", product);
  }, [id]);

  if (loading)
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card h-80 skeleton"></div>
        <div className="card h-80 skeleton"></div>
      </div>
    );

  if (error) return <div className="text-center text-red-500">{error}</div>;

  if (!product) return null;

  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="card p-6">
        <div className="h-80 w-full grid place-items-center overflow-hidden rounded-xl bg-neutral-50">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 object-contain"
          />
        </div>
      </div>
      <div className="card p-6">
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <div className="mt-1 text-sm text-neutral-500 capitalize">
          {product.category}
        </div>
        <div className="mt-3 text-2xl font-semibold">85</div>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-6 flex gap-3">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
