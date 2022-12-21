import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/AiOutlineShoppingCart';
import { BiMenuAltLeft } from '@react-icons/all-files/bi/BiMenuAltLeft';
import './Header.css'
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
    return (
        <div>
             <nav className="navbar">
      <div className="container">
      
        <div className="logo-icon">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <BiMenuAltLeft />
        </div>
          <div className='logo-cart'>
          <h1>
            Taste Now
          </h1>
          
          </div>
          
        </div>
        <p className="cart-icon">
        <NavLink to="/cart">
              <AiOutlineShoppingCart className="menu-cart"/>
              </NavLink>
          </p>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About us</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
           
            <li>
              <NavLink to="/contact-us">Contact us</NavLink>
            </li>
            <li>
              <Link  to="/cart">
              <AiOutlineShoppingCart className="cart"/>
              </Link>
            </li>
            <li>
             <button className="anti-btn">Sign up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    );
};

export default Header;