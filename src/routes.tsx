import { Navigate, RouteObject } from "react-router-dom";
import ConfirmPayPage from "./pages/confirm-pay";
import HomePage from "./pages/home";
import PageLayout from "./pages/PageLayout";
import RestaurantPage from "./pages/restaurant";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantPage />,
      },
      {
        path: "/confirm-pay",
        element: <ConfirmPayPage />,
      }
    ],
  },
];
