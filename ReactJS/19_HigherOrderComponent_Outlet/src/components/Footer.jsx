import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner p-4 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} MyApp. All rights reserved.
    </footer>
  );
};

export default Footer;
