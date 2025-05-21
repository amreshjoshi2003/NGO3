import React from 'react';
import presidentLogo from '../assets/Websitelogo.jpeg'; // Update path according to your file structure
import './PresidentMessage.css';

const PresidentMessage = () => {
  return (
    <div className="president-message-container">
      <button className="section-header" disabled>
        President Message
      </button>

      <div className="message-content">
        <img
          src={presidentLogo}
          alt="जन सहयोग युवा वाहिनी Logo"
          className="president-image"
        />
        <div className="message-text">
          <p>Dear Friends,</p>
          <p>
            It is with great pride and humility that I address you as the President of जन सहयोग युवा वाहिनी. Since our founding 2024, our organization has been driven by a simple yet profound belief: that every individual, regardless of circumstance, deserves the opportunity to thrive.
          </p>
          <p>
            At जन सहयोग युवा वाहिनी, we are not just dreamers; we are doers. We roll up our sleeves and work tirelessly to turn our vision of a better world into reality. From providing access to education and healthcare to championing environmental sustainability and social justice, our efforts are guided by a deep commitment to making a meaningful difference in the lives of others.
          </p>
          <p>
            But we cannot do it alone. Our success is built on the support of passionate individuals like you—individuals who share our values and our ...
          </p>
          <button className="read-more-btn">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;
