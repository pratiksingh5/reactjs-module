import React from "react";
import { Home, Cart, ProductDetails } from "./pages";
import { Header, Footer, FilterBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
   <div className="min-h-screen flex flex-col">
        <Header />
        {/* Main content */}
        <main className="flex-1 container-max py-6 w-full">
          <Routes>
            {/* <Home /> */}
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
   
    </BrowserRouter>
  );
};

export default App;
