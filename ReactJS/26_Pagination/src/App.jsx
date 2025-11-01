import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1); // current page
  const [limit] = useState(10); // items per page
  const [totalPages, setTotalPages] = useState(1); // for pagination later
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // ✅ Using dummyjson API which supports pagination
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);
        const data = await response.json();

        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / limit));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">🛍️ Product Store</h1>

      {/* Show loading while fetching */}
      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default App;
