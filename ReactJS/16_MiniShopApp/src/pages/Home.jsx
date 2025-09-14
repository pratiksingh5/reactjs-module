import React, { useEffect, useState } from "react";
import { EmptyState, FilterBar, ProductList } from "../components";
import { api } from "../api/axios";
import { Loader } from "../components";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({category: "all", name: ''})


  const filteredData = () => {
    console.log("filtes", filters)
    return products.filter( p => filters.category === "all" ? true : p.category === filters.category)
    .filter(p => p.title.toLowerCase().includes(filters.name.toLowerCase()))
  }

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
      <FilterBar setFilters={setFilters}/>
      {loading && <Loader/>}
      {!loading && error && <EmptyState title="Could not load products" subtitle={error}/>}
      {!loading && !error && products.length === 0 && <EmptyState title="No Products Found"/>}
      <ProductList products={filteredData()} />
    </div>
  );
};

export default Home;
