import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FacilityTour } from "./screens/FacilityTour";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <FacilityTour />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
