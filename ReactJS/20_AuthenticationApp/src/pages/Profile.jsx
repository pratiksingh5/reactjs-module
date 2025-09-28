import React from "react";
import { useNavigate } from "react-router";
import Navbar from "@/components/ui/Navbar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Profile = () => {
  const navigate = useNavigate();

  return (

      <div
        className="flex w-full items-center justify-center p-6 md:p-10 bg-[#f1f1f1]"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="w-full max-w-sm">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex gap-8 border-b border-gray-400 py-4">
                <div className="font-semibold">Name</div>
                <div>Pratik Singh</div>
              </div>

                            <div className="flex gap-8">
                <div className="font-semibold">Email</div>
                <div>pratik@gmail.com</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

  );
};

export default Profile;
