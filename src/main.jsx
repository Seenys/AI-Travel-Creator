import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// routes
import { routes } from "./routes";
// auth
import { GoogleOAuthProvider } from "@react-oauth/google";
// components
import { Header } from "./components";
import { Toaster } from "./components/ui/sonner";

// styling
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_APP_CLIENT_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={routes} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
