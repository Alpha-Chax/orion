import React,{useState} from 'react'
import {Link,NavLink, useLocation} from 'react-router-dom'
import './Styles/Navbar.css'
import { FiShoppingCart } from "react-icons/fi";
import {CgMenu, CgClose} from 'react-icons/cg'



function Navbar() {
    const [menuIcon, setMenuIcon] = useState();
    let location = useLocation();
  return (
    <div>
        <nav className={menuIcon ? "navbar navbar-expand-lg navbar-dark isactive":"navbar navbar-expand-lg navbar-dark"}>
            <div className="container-fluid ">
                <Link className="logo" to="/">
                    <img src="https://i.ibb.co/R9xRWQd/Orion.png" alt="Orion"/>
                </Link>
                      
                <div className="d-flex flex-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={`nav-link ${location.pathname==="/"? "active-link": ""}`} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${location.pathname==="/about"? "active-link": ""}`} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${location.pathname==="/contact"? "active-link": ""}`} to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${location.pathname==="/products"? "active-link": ""}`} to="/products">Products</NavLink>
                        </li>
                        </ul>                    
                </div>
                <div className='d-flex flex-end trolley'>
                        <ul className="me-auto mb-2 mb-lg-0">                
                        <li className="nav-item cart">
                        <NavLink className={`nav-link cart-trolley--link ${location.pathname==="/cart"? "active-link": ""}`} to="/cart">
                            <FiShoppingCart className="cart-trolley"/>
                            <span className="cart-total--item">10</span>
                        </NavLink>
                        </li>
                     </ul>
                </div>
                {/*  Hamburger button for Mobile    */} 
                <div className="mobile-navbar-btn">
                    <CgMenu name="menu-outline" className="mobile-nav-icon"
                    onClick={() => setMenuIcon(true)}
                    />
                    <CgClose name="close-outline" className="mobile-nav-icon close-outline"
                    onClick={() => setMenuIcon(false)}
                    />
                </div>               
            </div>
        </nav>
    </div>
  )
}

export default Navbar
