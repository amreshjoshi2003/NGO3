import React from 'react';
import './Last.css';
import footerLogo from '../assets/Websitelogo.jpeg';


const Last = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={footerLogo} alt="Jan Sahyog Logo" className="footer-logo" />
        <div className="footer-text">
          <h4>Jan Sahyog Foundation</h4>
          <p>Empowering communities through unity and service.</p>
          <p>&copy; {new Date().getFullYear()} Jan Sahyog Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Last;
