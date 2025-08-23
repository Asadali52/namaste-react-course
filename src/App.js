import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


import Header from "../src/components/Header";
import Body from "../src/components/Body";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Error_404 from "./components/Error_404";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ],
    errorElement: <Error_404 />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);