import React from 'react'
import './Contact.css'
import women from '../../assets/women.png'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={women} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Ask anything</h1>
            <div className="contact-details">
                <div className="contact-detail">
                    <p>todolists.com</p>
                </div>
                <div className="contact-detail">
                    <p>+468 000 0000</p>
                </div>
                <div className="contact-detail">
                    <p>Stockholm, SWEDEN</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
