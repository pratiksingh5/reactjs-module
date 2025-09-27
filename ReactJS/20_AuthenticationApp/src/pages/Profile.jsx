import React from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Profile Page</h1>
      <button className="bg-red-300 p-4" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
