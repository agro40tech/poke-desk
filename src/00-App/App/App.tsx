import { FC } from "react";

import "../style/__index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, NotFoundPage } from "01-Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
]);

export const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
