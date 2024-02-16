import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Progress from "./components/Progress";

const Error = lazy(() => import("./pages/Error"));

const AppLayout = () => {
  console.log("AppLayout Rendered");
  return (
    <div className="app">
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Progress />}>
            <ProblemSet />
          </Suspense>
        ),
      },
    ],
  },
]);
const AppRouter = () => <RouterProvider router={appRouter} />;

export default AppRouter;
