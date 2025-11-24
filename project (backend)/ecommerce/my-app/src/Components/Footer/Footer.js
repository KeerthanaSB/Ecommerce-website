import React from 'react';
import './Footer.css';
// import logo from '../Assets/logo.png';
// import instagram from '../Assets/instagram_icon.png';
// import printrest from '../Assets/printrest_icon.png';
// import whatsapp from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src='/Assets/logo.png' alt="Logo" />
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
                        <div className='footer-icons-container'>
                            <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer">
                                <img src='/Assets/instagram_icon.png' alt="Instagram" />
                            </a>
                        </div>
                        <div className='footer-icons-container'>
                            <a href="https://printrest.com/example" target="_blank" rel="noopener noreferrer">
                                <img src='/Assets/printrest_icon.png'alt="Printrest" />
                            </a>
                        </div>
                        <div className='footer-icons-container'>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                <img src='/Assets/whatsapp_icon.png' alt="WhatsApp" />
                            </a>
                        </div>
                    </div>
      <div className='footer-copyright'>
        <hr/>
        <p>&copy; 2024 Shopper. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;