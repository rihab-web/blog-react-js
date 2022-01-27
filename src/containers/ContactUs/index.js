import React from 'react'
import './style.css';
import Background from'../../blogPostImages/logobig.png';
import Footer from '../Footer';
/**
 *  @author
 * @function ContactUs
 **/

const ContactUs = (props)=> {
    return (
    <div>
        <div className="contact">
      <div
        className="leftSide"
        style={{backgroundImage: "url(" + Background + ")" }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form  className="contact-form"id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
     
    </div>
    <Footer/>
    </div>
    
    )
}
export default ContactUs