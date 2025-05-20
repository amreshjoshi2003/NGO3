import React from 'react';
import Slider from './Slider';
import HorizontalSlider from './HorizontalSlider';
import LatestActivity from './Latest Activity';
import AboutUsPreview from './AboutUsPreview';
import PresidentMessage from './PresidentMessage';
import Objectives from './Objectives';
import Gallery from './Gallery';
import Testimonial from './Testimonial';
import Last from './Last'; // ✅ This line was missing

import './Home.css';

const Home = () => {
  return (
    <div>
      <Slider/>
      <HorizontalSlider/>
      <LatestActivity />
      <AboutUsPreview/>
      <PresidentMessage/>
      <Objectives/>
      <Gallery/>
      <Testimonial />
      <Last/>
    </div>
  );
};

export default Home;
