import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <nav>
      <ul className="flex w-full gap-16 text-4xl list-none bg-cyan-100 p-4">
        <li>
          {/* <Link to="/">Home</Link>  */}
          <NavLink
             className={({ isActive }) => `p-6 ${isActive ? "bg-red-500" : ""}`}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `p-6 ${isActive ? "bg-red-500" : ""}`}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          {/* <Link to="contact">Contact</Link>  */}
          <NavLink
            className={({ isActive }) => `p-6 ${isActive ? "bg-red-500" : ""}`}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
