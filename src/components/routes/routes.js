import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Main from "../Layout/Main/Main";
import SignUp from "../SignUp/SignUp";


const routes = createBrowserRouter([
{
  path: "/",
  element: <Main/>,
  children : [
    
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/about-us",
      element: <AboutUs/>
    },
    {
      path: "/blog",
      element: <Blog/>
    },
    {
      path: "/contact-us",
      element: <ContactUs/>
    },
    {
      path: "/sign-up",
      element: <SignUp/>
    },
    {
      path: "/cart",
      element: <Cart/>
    }
    
  ]
}
  ]);

export default routes;