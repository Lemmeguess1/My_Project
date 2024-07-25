import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
    <div>
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
      <div>
        <p>Contact us: contact@littlelemon.com</p>
      </div>
      <div>
        <ul>
          <li><a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      
    </footer>
    

  );
}

export default Footer;
