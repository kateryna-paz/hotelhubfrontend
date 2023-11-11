import { createBrowserRouter } from "react-router-dom";
import { loader as singlePageLoader } from "./routes/SinglePage/SinglePage.jsx";
import { loader as catalogLoader } from "./routes/Catalog/components/Switch.jsx";
import Home from "./routes/Home/Home.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";
import Catalog from "./routes/Catalog/Catalog.jsx";
import Root from "./routes/Root/Root.jsx";
import SinglePage from "./routes/SinglePage/SinglePage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Root />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/catalog",
        children: [
          {
            index: true,
            element: <Catalog />,
            loader: catalogLoader,
          },
          {
            path: ":type/:id", // Шлях для будинків у каталозі
            element: <SinglePage />, // Замініть на вашу компоненту, яка показує сторінку для будинків
            loader: singlePageLoader, // Ви могли б додати свій loader
          },
        ],
      },
    ],
  },
]);
export default router;
