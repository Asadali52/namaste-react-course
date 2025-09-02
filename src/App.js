import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error_404 from "./components/Error_404";
import RestaurentMenu from "./components/RestaurentMenu";
import MyUserContext from "./utils/MyUserContext";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"))
// chunking 
// code splitting
// dynamic bundling
// lazy loading
// on demand loading

const AppLayout = () => {

  const [userName, setUserName] = useState("");
  useEffect(() => {
    // make an API call and senc username and password
    const data = {
      name: "Asad"
    }
    setUserName(data.name)
  }, [])


  return (
    <Provider store={appStore}>
      <MyUserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </MyUserContext.Provider>
    </Provider>
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
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error_404 />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);