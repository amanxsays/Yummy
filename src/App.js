import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./pages/About";
import { lazy } from "react";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Restaurant from "./pages/Restaurant";

//about page lazy import
const About= lazy(() => import("./pages/About"));

const App = () => (
  <div className="appLayout overflow-x-hidden">
    <Header />
    <Outlet />
  </div>
);

const Pages = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "about",
        element: <Suspense fallback={<div className="body"></div>}><About /></Suspense>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <Restaurant />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Pages} />);
