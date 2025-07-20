import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-yellow-400">Prime Videos</h1>
      </div>
      <div>
        <br />
        <ul className="flex space-x-40">
          <li>
            <a href="#" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Movies
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              TV Shows
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              My List
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
