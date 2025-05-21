import React from 'react';
import { Link } from 'react-router-dom';
import './Objectives.css';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const objectives = [
  {
    title: 'SOCIAL WELFARE',
    image: image1,
    path: '/social-welfare',
  },
  {
    title: 'HEALTH & RESEARCH',
    image: image2,
    path: '/health-research',
  },
  {
    title: 'EDUCATION & TRAINING',
    image: image3,
    path: '/education-training',
  },
  {
    title: 'HUMAN RIGHTS',
    image: image4,
    path: '/human-rights',
  },
];

const Objectives = () => (
  <section className="objectives-container">
    <h2 className="objectives-header">Our Objectives</h2>
    <div className="objectives-grid">
      {objectives.map(({ title, image, path }, i) => (
        <Link to={path} key={i} className="objective-card">
          <div
            className="objective-image"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={title}
          />
          <div className="objective-overlay">
            <h3 className="objective-title">{title}</h3>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default Objectives;
