import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">HOC</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a href="/" className="hover:text-indigo-600">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-indigo-600">
              About
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-indigo-600">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
