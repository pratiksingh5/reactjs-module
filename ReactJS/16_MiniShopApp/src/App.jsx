import React from "react";
import { Home, Cart } from "./pages";
import { Header, Footer, FilterBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* Main content */}
        <main className="flex-1 container-max py-6 w-full">
          <Routes>
            {/* <Home /> */}
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
