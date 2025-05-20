import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,

} from 'react-icons/fa6';
import logo from '../assets/Websitelogo.jpeg';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <button onClick={scrollToTop} className="scroll-to-top">
        ↑ Top
      </button>
    )
  );
};

const AboutUs = () => {
  const goals = [
    "बेसहारा व गरीबों के लिए फंड एकत्रित करना।",
    "पर्यावरण सुधार के लिए समस्त कार्य करना।",
    "क्षेत्र की विकलांग महिलाओं को साक्षर बनाना।",
    "सामाजिक समस्याओं व कुरीतियों को दूर करने तथा जनजागृति लाने हेतु सामाजिक जन चेतना जागृत करना।",
    "निःशुल्क चिकित्सालय, अनाथालय, वृद्धाश्रम की स्थापना व प्रबंधन कार्य नियमानुसार सम्पादित करना।",
    "निर्धन व असहाय व साधनहीन परिवारों की कन्याओं के लिए दहेज विहीन शादी समारोह का आयोजन करना।"
  ];

  const importance = [
    "सामाजिक नियंत्रणों के साधनों की व्यवस्था।",
    "संस्था व्यक्ति को कार्य एवं पद प्रदान करती है।",
    "मानव आवश्यकताओं की पूर्ति।",
    "संस्था सदस्यों के व्यवहारों में अनुरूपता लाती है।",
    "संस्कृति की वाहक।",
    "सामूहिक जीवन में व्यक्ति का मार्गदर्शन करना।",
    "आम जनमानस व संस्था के बीच पारदर्शिता।"
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <section className="section">
        <h3 className="section-title">संस्था का लक्ष्य</h3>
        <ol className="section-list">
          {goals.map((item, index) => (
            <li key={index} className="section-item">{item}</li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h3 className="section-title">संस्था का महत्व</h3>
        <ol className="section-list">
          {importance.map((item, index) => (
            <li key={index} className="section-item">{item}</li>
          ))}
        </ol>
      </section>

      <section className="section english-section">
        <h3 className="section-title">Our Mission</h3>
        <p>
          <strong>जन सहयोग युवा वाहिनी</strong> is a passionate advocate for positive change, dedicated to making a tangible difference in the world.
          Since our inception in 2020, we have been driven by a singular mission: to empower individuals and communities to thrive through sustainable development initiatives, education, healthcare access, and environmental stewardship.
        </p>

        <h4>Our Values</h4>
        <p>
          At जन सहयोग युवा वाहिनी, our core values of compassion, integrity, and inclusivity guide everything we do.
          We believe in the power of collaboration and collective action to address pressing global challenges and create lasting impact.
        </p>

        <h4>Our Impact</h4>
        <p>
          Through strategic partnerships, grassroots initiatives, and the dedication of our team,
          we have achieved significant milestones in education, healthcare outreach, and environmental awareness.
          Our work has touched the lives of over 50,000 individuals and continues to inspire positive change nationwide.
        </p>

        <h4>Join Us</h4>
        <p>
          Join us in our mission to create a brighter, more equitable world for all. Together, we can make a difference.
        </p>
      </section>

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-contact">

            <h4>प्रधान कार्यालय</h4>
            <p>
              कार्यालय:- जन सहयोग युवा वाहिनी वार्ड नम्बर 01 अम्बेडकर नगर, नियर सिसवा बाई पास रोड, खड्डा बाजार, कुशीनगर, उत्तर प्रदेश - 274802
            </p>
          </div>
          <div className="footer-call">

            <h4>Call us</h4>
            <p>+91 7880790690</p>
          </div>
          <div className="footer-email">

            <h4>Email</h4>
            <p>communications@jansahyogm.com</p>
          </div>
        </div>

        <hr className="divider" />

        <div className="footer-middle">
          <div className="footer-logo">
            <img src={logo} alt="जन सहयोग युवा वाहिनी Logo" className="footer-logo-img" />
          </div>

          <div className="footer-social">
            <h4>Follow us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Member Apply</a></li>
              <li><a href="#">Team Member</a></li>
              <li><a href="#">List Of Donors</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Latest Event</a></li>
              <li><a href="#">Donation</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Management Team</a></li>
              <li><a href="#">ID Card Download</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © 2025, All Right Reserved <strong className="highlight">जन सहयोग युवा वाहिनी</strong>
          </p>
          <p>
            Website Designed By - <a href="#">Fragron Infotech</a>, Mob. - <a href="#">7000131032</a>
          </p>
          <div className="footer-policy-links">
            <a href="#">Terms & Condition</a> |
            <a href="#">Privacy Policy</a> |
            <a href="#">Disclaimer</a> |
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default AboutUs;