import React from "react";
import './Navbar.css';
import logo from '../../assets/logo (2).svg';

const Navbar = () => {
  
    return (
        <div className="navbar">
            <a href="/hero"><img src={logo} alt="Logo" className="logo" /></a>
            <ul className="nav-menu">
                <li><a href="/hero">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/todo">Todo Lists</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="nav-connect"><a className='link' href='/contact'>Connect</a></div>
        </div>
    );
}

export default Navbar;
