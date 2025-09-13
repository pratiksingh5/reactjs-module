import React from "react";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import { useCart } from "../context/CartContext";
import EmptyState from "./EmptyState"

const Header = () => {
  const { totalItems } = useCart();

  console.log("total", totalItems);
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="container-max flex h-16 items-center justify-between">
        <NavLink to="/" className="text-xl font-semibold tracking-tight">
          minimal<span className="text-neutral-400">shop</span>
        </NavLink>
        <div className="flex items-center gap-3">
          {/* Products link */}
          <NavLink to="/" className="relative btn">
            Products
          </NavLink>

          {/* Cart link */}
          <NavLink to="/cart" className="relative btn flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>

            { totalItems > 0 && <span className="absolute -right-2 -top-2 rounded-full bg-neutral-800 text-white min-w-[30px] px-2 flex items-center justify-center">{totalItems}</span>} 
 
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
