import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUsPreview.css';

const AboutUsPreview = ({
  delay = 1000, // ⏱️ adjustable reveal speed (ms)
  imageSrc = "https://jvahini.in/timeline-img/WhatsApp%20Image%202025-04-24%20at%2021.50.22_04242025221352.jpeg",
  heading = "Abouts Us",
  title = "संस्था का उद्देश्य",
  mission = "Join us in our mission to create a brighter, more equitable world for all. Together, we can make a difference.",
  redirectPath = "/about-us",
}) => {
  const navigate = useNavigate();
  const [visibleLines, setVisibleLines] = useState([]);

  const contentLines = [
    '1. सामाजिक, नैतिक एवं विकास हेतु रचनात्मक भूमिका का निर्वहन करना।',
    '2. अशिक्षित समाज को शिक्षित करना तथा दहेज, बाल विवाह, नारी उत्पीड़न को समाप्त करना।',
    '3. गरीबों को सहायता, सर्वधर्म समभाव, और विज्ञान, कला, साहित्य का प्रचार।',
    '4. शोषित समाज जैसे आदिवासी, अनुसूचित जनजाति, पिछड़े वर्गों का विकास।',
    '5. संस्था के उद्देश्यों की पूर्ति हेतु आवश्यक कार्य करना।',
    '6. सरकारी योजनाओं को जन-जन तक पहुंचाना, कंबल व भोजन की व्यवस्था।',
    '7. प्राकृतिक आपदाओं में निस्वार्थ सहयोग करना।'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev.length < contentLines.length) {
          return [...prev, contentLines[prev.length]];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  const handleReadMore = () => {
    navigate(redirectPath);
  };

  return (
    <div className="about-preview-container">
      <h2 className="heading">{heading}</h2>

      <div className="about-card">
        <img src={imageSrc} alt="NGO" className="about-image" />

        <div className="about-text">
          <h1>{title}</h1>

          {visibleLines.map((line, index) => (
            <p key={index} className="fade-line">{line}</p>
          ))}

          <h3><b>Join Us</b></h3>
          <p>{mission}</p>

          <button className="read-more-button" onClick={handleReadMore}>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPreview;
