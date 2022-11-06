import React from 'react'
import {Link,NavLink, useLocation} from 'react-router-dom'
import './Styles/Navbar.css'



function Navbar() {

    let location = useLocation();
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">Orion</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
                        <li>
                        <NavLink className={"nav-link"}>Cart</NavLink>
                        </li>
                    </ul>
                </div>               
            </div>
        </nav>
    </div>
  )
}

export default Navbar
