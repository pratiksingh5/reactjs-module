import { createBrowserRouter } from "react-router";
import { Login, SignUp, Profile, NotFound } from "../pages";

const routes = createBrowserRouter([
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
    element: <Profile />,
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);

export default routes;