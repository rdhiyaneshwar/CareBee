import React from 'react';
import '../assets/css/Feedback.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navbar';
import Footer from './Footer';
import Social from './Social';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_cn5wcao', 'template_1s0fh1t', form.current, 'vhcyI9LMSVmiv6iZi')
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
    <Navigation/>
    <Social/>
      <div className="containerform">
        <div className="wrapperform">
          <div className="company-infoform">
            <h3 className="headingform">CONTACT US</h3>
            <ul className="listform">
              <li className="listitemform">
                <FontAwesomeIcon icon={faRoad} /> 44 Main Street Coimbatore
              </li>
              <li className="listitemform">
                <FontAwesomeIcon icon={faPhone} /> 9789299229
              </li>
              <li className="listitemform">
                <FontAwesomeIcon icon={faEnvelope} /> carebee@gmail.com
              </li>
            </ul>
          </div>
          <div className="contactform">
            <h3 className="loveform">E-mail Us</h3>
            <form className="formelement" ref={form} onSubmit={sendEmail}>
              <p>
                <label className="labelelement">Name</label>
                <input type="text" name="name" id="name" className="inputelement" />
              </p>
              <p>
                <label className="labelelement">E-mail Address</label>
                <input type="email" name="email" id="email" className="inputelement" />
              </p>
              <p className="fullform">
                <label className="labelelement">Message</label>
                <textarea name="message" rows="5" id="message" className="textareaelement" />
              </p>
              <button className="button147form">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactForm;
