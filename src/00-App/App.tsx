import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./Assets/style/__index.scss";
import { HomePage } from "01-Pages/Home";
import { NotFoundPage } from "01-Pages/NotFound";

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
