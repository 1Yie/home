import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "../pages";
import Home from "../pages/Home";
import About from "../pages/About";
import Links from "../pages/Links";
import Error404 from "../components/ErrorPage/404"

import DefaultElement from "../utils/SetTitle";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Page />,
      children: [
        {
          path: "",
          element: <DefaultElement element={Home} meta={{ title: "ichiyo (@1Yie)" }} />
          
        },
        {
          path: "about",
          element: <DefaultElement element={About} meta={{ title: "ichiyo | About" }} />
        },
        {
          path: "links",
          element: <DefaultElement element={Links} meta={{ title: "ichiyo | Links" }} />
        },
        {
          path: "*",
          element: <DefaultElement element={Error404} meta={{ title: "ichiyo | 404" }} />
        }
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

const AppRouter: React.FC = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default AppRouter;
