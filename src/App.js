import React, { lazy, Suspense } from "react";
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
import Error_404 from "../src/components/Error_404";
import RestaurentMenu from "../src/components/RestaurentMenu";
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"))

// chunking 
// code splitting
// dynamic bundling
// lazy loading
// on demand loading



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
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<p className="text-red-500">Loading....</p>}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: '/restaurents/:resId',
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error_404 />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);