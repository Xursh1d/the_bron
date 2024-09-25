import { Navigate, RouteObject } from "react-router-dom";
import ConfirmPayPage from "./pages/confirm-pay";
import HomePage from "./pages/home";
import LikesPage from "./pages/likes";
import MyReservationsPage from "./pages/my-reservation";
import EditBookingPage from "./pages/my-reservation/edit-booking";
import { CancelBooking } from "./pages/my-reservation/modals/CancelBooking";
import LeaveFeedback from "./pages/my-reservation/modals/LeaveFeedback";
import SuccessCancel from "./pages/my-reservation/modals/SuccessModal";
import NotificationsPage from "./pages/notifications";
import RestaurantPage from "./pages/restaurant";
import PageLayout from "./pages/PageLayout";
import ProtectedRoute from "./ProtectedRoute";

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
        element: <ProtectedRoute />,
        children: [
          {
            path: "/my-reservation",
            element: <MyReservationsPage />,
            children: [
              {
                path: "cancel",
                element: <CancelBooking />,
              },
              {
                path: "cancel/success",
                element: <SuccessCancel />,
              },
              {
                path: "feedback",
                element: <LeaveFeedback />,
              },
              {
                path: "edit",
                element: <EditBookingPage />,
              },
            ]
          },
        ],
      },
      {
        path: "/likes",
        element: <ProtectedRoute />,  // Protect Likes Page
        children: [
          {
            path: "/likes/",
            element: <LikesPage />,
          },
        ],
      },
      {
        path: "/notifications",
        element: <ProtectedRoute />,  // Protect Notifications Page
        children: [
          {
            path: "/notifications/",
            element: <NotificationsPage />,
          },
        ],
      },
    ],
  },

];
