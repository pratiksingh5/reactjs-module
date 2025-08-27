import React, { useEffect, useState } from "react";
import { FilterBar, ProductList } from "../components";
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
      {!loading && error && <h1>{error}</h1>}
      <ProductList products={products} />
    </div>
  );
};

export default Home;
