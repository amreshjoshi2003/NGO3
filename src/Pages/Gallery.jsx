import React, { useState } from 'react';
import './Gallery.css';

const images = [
  '/src/assets/image1.png',
  '/src/assets/image1.png',
  '/src/assets/image1.png',
  '/src/assets/image1.png',
  '/src/assets/image1.png',
  '/src/assets/image1.png',
  '/src/assets/image1.png',
  '/src/assets/image1.png',
  '/src/assets/image1.png',
  
  '/gallery/image6.png',
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, images.length));
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.slice(0, visibleCount).map((src, i) => (
          <div className="gallery-card" key={i}>
            <img src={src} alt={`Gallery ${i + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
      {visibleCount < images.length && (
        <div className="gallery-showmore-container">
          <button className="gallery-showmore" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
