import { createBrowserRouter } from "react-router";
import { Login, SignUp, Profile, NotFound, Users } from "../pages";
import BaseLayout from "@/layouts/BaseLayout";
import ProtectedRoutes from "./Protected";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/users",
        element: (
          <ProtectedRoutes>
            <Users />
          </ProtectedRoutes>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
