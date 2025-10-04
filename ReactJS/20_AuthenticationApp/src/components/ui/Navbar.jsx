import React from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { logout } from "@/redux/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;
  const dispatch = useDispatch();

  let buttonLabel = "Sign Up";
  if (pathName === "/sign-up") {
    buttonLabel = "Login";
  } else if (pathName === "/profile") {
    buttonLabel = "Logout";
  }

  const handleButtonClick = () => {
    if (pathName === "/profile") {
      dispatch(logout());
      navigate("/");
    } else if (pathName === "/sign-up") {
      navigate("/");
    } else {
      navigate("/sign-up");
    }
  };

  // console.log("location", location)
  return (
    <nav className="w-full flex justify-between items-center h-20 bg-gray-100 px-20">
      <h2 className="text-blue-500 font-bold">Authentication App</h2>

      <div onClick={handleButtonClick}>
        <Button className="cursor-pointer">{buttonLabel}</Button>
      </div>
    </nav>
  );
};

export default Navbar;
