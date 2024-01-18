import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Success from "../pages/Success";
import Cancel from "../pages/Cancel";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
    ],
  },
]);
