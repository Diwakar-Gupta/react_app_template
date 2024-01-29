import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Progress from "./components/Progress";

const Error = lazy(() => import("./pages/Error"));

const AppLayout = () => {
  console.log("AppLayout Rendered");
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: (
      <Suspense fallback={<Progress />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Progress />}>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
          </Suspense>
        ),
      },
    ],
  },
]);
const AppRouter = () => <RouterProvider router={appRouter} />;

export default AppRouter;
