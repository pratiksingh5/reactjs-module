import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center h-20 bg-gray-100 px-20">
      <div>Authentication App</div>
      <Button>Sign up</Button>
    </nav>
  );
};

export default Navbar;
