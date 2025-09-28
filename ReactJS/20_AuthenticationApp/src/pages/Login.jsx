import React from "react";
import { Link, useNavigate } from "react-router";
import Navbar from "@/components/ui/Navbar";
import { LoginForm } from "@/components/ui/LoginForm";


const Login = () => {
  const navigate = useNavigate();

  return (

      <div className="flex w-full items-center justify-center p-6 md:p-10 bg-[#f1f1f1]" style={{ height: "calc(100vh - 80px)"}}>
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>

  );
};

export default Login;
