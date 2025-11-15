import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersonalTraining } from "./screens/PersonalTraining";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <PersonalTraining />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
