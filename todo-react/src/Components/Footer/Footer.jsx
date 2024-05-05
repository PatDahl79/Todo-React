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
                <li><a href="/todo">Todo Lists</a></li>
                <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer