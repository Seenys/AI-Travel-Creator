import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// routes
import { routes } from "./routes";
// components
import { Header } from "./components";
// styling
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={routes} />
  </React.StrictMode>
);