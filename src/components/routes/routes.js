import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Main from "../Layout/Main/Main";
import SignUp from "../SignUp/SignUp";
import Modal from "../Screen/Modal";
import Dashboard from "../Screen/Dashboard/Dashboard";
import Overview from "../Screen/Dashboard/Overview";
import Report from "../Screen/Dashboard/Report";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/modal",
        element: <Modal />,
      },
      {
        path: "dashboard", // Path for the dashboard
        element: <Dashboard />, // Render the Dashboard component
        children: [
          {
            path: "", // Default child route for the dashboard (relative path)
            element: <Overview />,
          },
          {
            path: "reports", // Child route for the "reports" page (relative path)
            element: <Report />,
          },
          // Add more nested routes for the dashboard if needed
        ],
      },
    ],
  },
]);

export default routes;
