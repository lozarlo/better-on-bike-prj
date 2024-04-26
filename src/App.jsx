import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./app/pages/home/home";
import About from "./app/pages/about/about";
// import Location from "./app/pages/location/location";
import Layout from "./app/pages/layout/layout";
import Gallery from "./app/pages/gallery/gallery";
import Error from "./app/pages/error/error";

function App() {
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        // { path: "/location", element: <Location /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/*", element: <Error /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
