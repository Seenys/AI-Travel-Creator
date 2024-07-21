import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { CreateTrip, ErrorPage } from "./pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
]);
