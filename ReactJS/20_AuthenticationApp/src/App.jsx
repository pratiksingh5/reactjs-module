import React from "react";
import { RouterProvider } from "react-router";
import routes from "./routes/appRoute";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  );
};

export default App;
