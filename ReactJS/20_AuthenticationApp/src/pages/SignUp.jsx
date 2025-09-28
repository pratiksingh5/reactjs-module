import React from "react";
import { Link } from "react-router";
import { SignUpForm } from "@/components/ui/SignUpForm";
import Navbar from "@/components/ui/Navbar";

const SignUp = () => {
  return (

      <div className="flex w-full items-center justify-center p-6 md:p-10 bg-[#f1f1f1]" style={{ height: "calc(100vh - 80px)"}}>
        <div className="w-full max-w-sm">
          <SignUpForm />
        </div>
      </div>

  );
};

export default SignUp;
