import React, { useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo (2).svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = ()  => {

    const [menu,setMenu] = useState("home");
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-menu">
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("contact")}>About</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#todo'><p onClick={()=>setMenu("contact")}>To do lists</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect</AnchorLink></div>
        </div>
    )
}

export default Navbar