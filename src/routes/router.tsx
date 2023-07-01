import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { ButtonsPage } from "../pages/ButtonsPage";
import { Root } from "./Root";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/buttons",
        element: <ButtonsPage />,
      },
    ],
  },
]);
