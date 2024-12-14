import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
<<<<<<< HEAD
// import About from "./components/About"
=======
import About from "./components/About"
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
<<<<<<< HEAD
=======
import Footer from "./components/Footer";
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Aman Gupta",
    };
    setUserName(data.name);
  }, []);


  return (
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
<<<<<<< HEAD
=======
      <Footer />
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)
    </userContext.Provider>
    </Provider>
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
        element: <Body />,
      },

<<<<<<< HEAD
      // {
      //   path: "/about",
      //   element: <About />
      // },
=======
      {
        path: "/about",
        element: <About />
      },
>>>>>>> 9d60c91 (changes in upi, fixed api cors issue)

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "restaurent/:resid",
        element: <RestaurantMenu />,
      },

      {
        path: "/cart",
        element: <Cart />
      },

      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
