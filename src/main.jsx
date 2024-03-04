import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import PageOne from "./PageOne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  },
  {
    path: "/pageOne",
    element: <PageOne />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
