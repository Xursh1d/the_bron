import { Navigate, RouteObject } from "react-router-dom";
import ConfirmPayPage from "./pages/confirm-pay";
import HomePage from "./pages/home";
import MyReservationsPage from "./pages/my-reservation";
import { CancelBooking } from "./pages/my-reservation/modals/CancelBooking";
import LeaveFeedback from "./pages/my-reservation/modals/LeaveFeedback";
import SuccessCancel from "./pages/my-reservation/modals/SuccessModal";
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
      },
      {
        path: "/my-reservation",
        element: <MyReservationsPage />,
        children: [
          {
            path: "/my-reservation/cancel",
            element: <CancelBooking />
          },
          {
            path: "/my-reservation/cancel/success",
            element: <SuccessCancel />
          },
          {
            path: "/my-reservation/feedback",
            element: <LeaveFeedback />
          }
        ]
      }
    ],
  },
];
