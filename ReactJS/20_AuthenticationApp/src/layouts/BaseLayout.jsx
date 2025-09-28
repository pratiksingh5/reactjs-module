import React from "react";
import { Outlet } from "react-router";
import Navbar from "@/components/ui/Navbar";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default BaseLayout;
