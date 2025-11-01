import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AuthLayout from "./layouts/AuthLayout";
// import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./pages/NotFound";

// import Login from "./pages/Login";
const Login = lazy(() => import("./pages/Login"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
// const Login = lazy(() => import('./pages/Login'))


const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Suspense fallback="Compontnt Loading....">
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
