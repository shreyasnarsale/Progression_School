import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Quotes from "./pages/Quotes";
import Contact from "./pages/Contact";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "users", element: <Users /> },
      { path: "users/:userId", element: <UserDetails /> },
      { path: "quotes", element: <Quotes /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
