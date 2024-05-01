import React from 'react'
import './Footer.css'
import logo from '../../assets/logo (2).svg'
import mail from '../../assets/Mail-icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="footer-container">
            <div className="footer-left">
                <img src={logo} alt="" />
                <p className="footer-left">© 2024 Todod Lists. All rights reserved.</p>
            </div>

            <div className="footer-right">
                <ul className="footer-menu">
                <li>Term of Services</li>
                <li>Privacy Policy</li>
                <li>To do lists</li>
                <li>Connect with us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer