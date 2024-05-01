import React from 'react';
import './Contact.css';
import meditation from '../../assets/Meditation-icon.png';
import mail from '../../assets/Mail-icon.png';
import call from '../../assets/Call-icon.png';
import home from '../../assets/Home-icon.png';

const Contact = () => {
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    event.target.reset();
  };

  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Ask anything</h1>
          <p>We are here to help you, so feel free to send the message about anything and anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" /> <p>todolists.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" /> <p>+468 000 0000</p>
            </div>
            <div className="contact-detail">
              <img src={home} alt="" /><p>Stockholm, SWEDEN</p>
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
  );
};

export default Contact;
