import React from "react";
import { RouterProvider } from "react-router";
import routes from "./routes/appRoute";

const App = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
