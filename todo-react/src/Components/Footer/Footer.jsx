import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className="footer-container">
            <div className="footer-left">
                <p>© 2024 Todod Lists. All rights reserved.</p>
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