import React from "react";
import { ShoppingCart } from "lucide-react";

const HeaderUI = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="container-max flex h-16 items-center justify-between">
        <a className="text-xl font-semibold tracking-tight">
          minimal<span className="text-neutral-400">shop</span>
        </a>
        <div className="flex items-center gap-3">
          {/* Products link */}
          <a
            className="relative btn"
          >
            Products
          </a>

          {/* Cart link */}
          <a to="/cart" className="relative btn flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderUI;
