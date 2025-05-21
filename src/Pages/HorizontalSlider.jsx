import React from 'react';
import './HorizontalSlider.css';
import { Link } from 'react-router-dom'; // Make sure React Router is installed and set up
import { FaUserPlus, FaCalendarAlt, FaUsers, FaDonate, FaHandHoldingUsd } from 'react-icons/fa';

const items = [
  { icon: <FaUserPlus />, label: 'Member Apply', path: '/member-apply' },
  { icon: <FaCalendarAlt />, label: 'Upcoming Events', path: '/upcoming-event' },
  { icon: <FaUsers />, label: 'Management Team', path: '/management-team' },
  { icon: <FaDonate />, label: 'Donate', path: '/donate' },
  { icon: <FaUsers />, label: 'Community', path: '/community' },
  { icon: <FaUserPlus />, label: 'Join Us', path: '/join' },
  { icon: <FaHandHoldingUsd />, label: 'Crowd Funding', path: '/crowd-funding' },
];

const HorizontalSlider = () => {
  return (
    <div className="horizontal-slider">

      {items.map((item, index) => (
        <Link to={item.path} className="card" key={index}>
          <div className="icon">{item.icon}</div>
          <div className="label">{item.label}</div>

        </Link>

      ))}
    </div>
  );
};

export default HorizontalSlider;
