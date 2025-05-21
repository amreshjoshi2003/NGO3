import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Latest Activity.css';


// Import required modules
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

const imageLinks = [
  "https://jvahini.in/timeline-img/1000046722_11242024160606.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0033_0962024173004.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0034_0962024173004.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0035_0962024173004.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0036_0962024173004.jpg", // fixed hhttps
  "https://jvahini.in/timeline-img/IMG-20240906-WA0037_0962024173004.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0038_0962024173052.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0039_0962024173052.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0041_0962024172815.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0042_0962024172815.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0043_0962024172730.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0044_0962024173052.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0045_0962024172730.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0046_0962024172730.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0047_0962024172815.jpg",
  "https://jvahini.in/timeline-img/IMG-20240906-WA0048_0962024172730.jpg",
  "https://jvahini.in/timeline-img/IMG-20240922-WA0036_09222024212457.jpg",
  "https://jvahini.in/timeline-img/IMG-20250412-WA0004_04122025105348.jpg",
  "https://jvahini.in/timeline-img/Rishikesh%20Nishad_Certificate_0122025191329.png",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-06%20at%2016.33.56_a0c105ef_0962024173052.jpg",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-06%20at%2016.33.57_58e2a5e0_0962024173052.jpg",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-10%20at%2018.07.42_09212024114035.jpeg",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-10%20at%2018.07.44_09212024114035.jpeg",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-10%20at%2018.07.57_09212024113842.jpeg",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-10%20at%2018.07.57_09212024113926.jpeg",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-10%20at%2018.08.05_09212024113842.jpeg",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-10%20at%2018.08.06_09212024113842.jpeg", // fixed .jpegs to .jpeg
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-10%20at%2018.08.15_09212024113926.jpeg",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-10%20at%2018.08.16_09212024113842.jpeg",
  "https://jvahini.in/timeline-img/WhatsApp%20Image%202024-09-10%20at%2018.08.16_09212024113926.jpeg",
];

export default function LatestActivity() {
  return (
    <div className="latest-activity-container">
      <h1 className="latest-activity-heading">Latest Activity</h1>

      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imageLinks.map((link, index) => (
          <SwiperSlide key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                src={link}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
