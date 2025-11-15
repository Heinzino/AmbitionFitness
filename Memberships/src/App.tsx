import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Memberships } from "./screens/Memberships";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Memberships />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
