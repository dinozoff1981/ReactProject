import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Contact/Contact.css';


const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h2>CONTACT </h2>
          <div className="links">

            <div className="link">

              <a href="https://linkedin.com"><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"  alt="linkedin" /></a>
            </div>
            <div className="link">
              <a href="https://github.com/dinozoff1981?tab=repositories"><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
            </div>
          
            <div className="link">
              <a href="https://yahoo.com"><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
            </div>

          </div>

        </div>
        <div className="contact-form-wrapper">
          <form>
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input type="text" name="email" required />
              <label>Email:</label>
            </div>
            <div className="form-item">
              <textarea className="" name="message" required></textarea>
              <label>Message:</label>
            </div>
            <button className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
