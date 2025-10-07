import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/api/axios";
import { useSelector } from "react-redux";

const Users = () => {
  const [users, setUsers] = useState([]);
  const token = useSelector((state) => state.token);

//   console.log("token", token);

//   useEffect(() => {
//     const getAllUsers = async () => {
//       const response = await api.get("/api/users", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },  
//       });
//     //   console.log("response", response);
//       if (response.data) {
//         setUsers(response.data.users);
//       }
//     };

//     getAllUsers();
//   }, [token]);

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await api.get("/api/users");
      console.log("response", response);
      if (response.data) {
        setUsers(response.data.users);
      }
    };

    getAllUsers();
  }, [token]);

  return (
    <div
      className="flex w-full items-center justify-center p-6 md:p-10 bg-[#f1f1f1]"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Users</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex gap-8 border-b border-gray-400 py-4">
              <div className="font-semibold">Name</div>
              <div className="font-semibold">Email</div>
            </div>

            {users &&
              users.length > 0 &&
              users.map((user) => (
                <div className="flex gap-8">
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Users;
