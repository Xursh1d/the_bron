import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { CancelBooking } from "./pages/my-reservation/modals/CancelBooking";
import SuccessCancel from "./pages/my-reservation/modals/SuccessModal";
import LeaveFeedback from "./pages/my-reservation/modals/LeaveFeedback";
import PageLayout from "./pages/PageLayout";
import ProtectedRoute from "./ProtectedRoute";

const ConfirmPayPage = lazy(() => import("./pages/confirm-pay"));
const HomePage = lazy(() => import("./pages/home"));
const LikesPage = lazy(() => import("./pages/likes"));
const MyReservationsPage = lazy(() => import("./pages/my-reservation"));
const EditBookingPage = lazy(() => import("./pages/my-reservation/edit-booking"));
const NotificationsPage = lazy(() => import("./pages/notifications"));
const RestaurantPage = lazy(() => import("./pages/restaurant"));

const SuspenseLoader = (Component: React.LazyExoticComponent<any>) => (
  <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
    <Component />
  </Suspense>
);

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
        element: SuspenseLoader(HomePage),
      },
      {
        path: "/restaurant/:id",
        element: SuspenseLoader(RestaurantPage),
      },
      {
        path: "/confirm-pay",
        element: SuspenseLoader(ConfirmPayPage),
      },
      {
        path: "/my-reservation",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/my-reservation",
            element: SuspenseLoader(MyReservationsPage),
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
            ],
          },
          {
            path: "edit",
            element: <EditBookingPage />,
          },
        ],
      },
      {
        path: "/likes",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/likes/",
            element: SuspenseLoader(LikesPage),
          },
        ],
      },
      {
        path: "/notifications",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/notifications/",
            element: SuspenseLoader(NotificationsPage),
          },
        ],
      },
    ],
  },
];
