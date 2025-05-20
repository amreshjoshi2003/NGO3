import React from 'react';
import './Testimonial.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import avatar from '../assets/avatar.png';
 // Replace with actual path

const Testimonial = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-container">
        <button className="nav-button left">
          <FaChevronLeft />
        </button>

        <div className="testimonial-content">
          <img src={avatar} alt="Avatar" className="avatar" />
          <p className="testimonial-text">
            Through your compassionate initiatives and remarkable leadership,
            you have demonstrated a steadfast commitment to <strong>[mention specific
            achievements or projects undertaken]</strong>. Your organization's selfless
            contributions have not only inspired others but have also set a
            shining example of humanitarianism and solidarity.
          </p>
          <h3 className="testimonial-name">Anirudh</h3>
          <p className="testimonial-role">Member</p>
        </div>

        <button className="nav-button right">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
