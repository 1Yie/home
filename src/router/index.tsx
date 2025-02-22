import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page from "../pages";
import Home from "../pages/Home";
import About from "../pages/About";
import Links from "../pages/Links";
import Error404 from "../components/ErrorPage/404";
import DefaultElement from "../utils/SetTitle";

const routes = [
  { path: "/", element: Home, meta: { title: "ichiyo (@1Yie)" } },
  { path: "about", element: About, meta: { title: "ichiyo | About" } },
  { path: "links", element: Links, meta: { title: "ichiyo | Links" } },
  { path: "*", element: Error404, meta: { title: "ichiyo | 404" } },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: routes.map(route => ({
      path: route.path,
      element: <DefaultElement element={route.element} meta={route.meta} />
    }))
  }
], {
  future: {
    v7_relativeSplatPath: true,
  },
});

const AppRouter: React.FC = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default AppRouter;
// export { routes };