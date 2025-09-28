import React from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
 
  console.log("location", location)
  return (
    <nav className="w-full flex justify-between items-center h-20 bg-gray-100 px-20">
      <h2 className="text-blue-500 font-bold">Authentication App</h2>
      <Button>

        {
          pathName === "/profile" ? "Logout" : pathName === "/sign-up" ? "Login" : "Sign Up"
        }
      </Button>
    </nav>
  );
};

export default Navbar;
