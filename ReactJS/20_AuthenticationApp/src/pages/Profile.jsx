import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux";

const Profile = () => {
  const userInfo = useSelector((state) => state.user);
  // console.log("userInfo", userInfo)

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
              <div>{userInfo?.name}</div>
            </div>

            <div className="flex gap-8">
              <div className="font-semibold">Email</div>
              <div>{userInfo?.email}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
