import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Custom CSS
import './slider.css';

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://jvahini.in/timeline-img/1000046722_11242024160606.jpg"
            alt="Bangkok"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://jvahini.in/timeline-img/IMG-20240906-WA0044_0962024173052.jpg"
            alt="Nature"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://jvahini.in/timeline-img/IMG-20240906-WA0043_0962024172730.jpg"
            alt="Museum"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://jvahini.in/timeline-img/IMG-20240906-WA0034_0962024173004.jpg"
            alt="Museum"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
