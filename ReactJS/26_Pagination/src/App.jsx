import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [limit] = useState(10); // items per page
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // ✅ Using dummyjson API which supports pagination
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=0`);
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

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
