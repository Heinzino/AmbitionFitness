import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GroupSessions } from "./screens/GroupSessions";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <GroupSessions />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
