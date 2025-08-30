import React, { useEffect, useState } from "react";
import { EmptyState, FilterBar, ProductList } from "../components";
import { api } from "../api/axios";
import { Loader } from "../components";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  useEffect(() => {
    const getAllProducts = async () => {
      try {
      setLoading(true)
      const response = await api.get("/products");
      console.log("response", response);
      setProducts(response.data);
      }
      catch(err) {
        console.log(err);
        setError("Failed to fetch products")
      }
      finally{
        setLoading(false)
      }
    };

    getAllProducts();
  }, []);

  return (
    <div>
      <FilterBar />
      {loading && <Loader/>}
      {!loading && error && <EmptyState title="Could not load products" subtitle={error}/>}
      {!loading && !error && products.length === 0 && <EmptyState title="No Products Found"/>}
      <ProductList products={products} />
    </div>
  );
};

export default Home;
