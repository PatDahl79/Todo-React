import React from "react";
import './Navbar.css'
import logo from '../../assets/logo (2).svg'


const Navbar = ()  => {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>To do lists</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect with</div>
        </div>
    )
}

export default Navbar