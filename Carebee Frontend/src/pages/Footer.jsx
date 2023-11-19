import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p className="copyright">© 2023 CareBee. All Rights Reserved.</p>
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;