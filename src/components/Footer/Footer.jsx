import React from 'react';
import './footerStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer'>
      <div className="social-media-links">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
