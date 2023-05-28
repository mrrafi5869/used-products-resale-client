import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarSwiper.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

const CarSwiper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <p className="font-bold text-3xl uppercase text-center mt-[10%] mb-8">Our <span className="text-blue-500">Cars</span> Brand</p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/grey-metallic-jeep-with-blue-stripe-it_114579-4080.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/red-black-supercar-with-word-supercar-side_1340-23413.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/gold-supercar-with-word-supercar-front_1340-32300.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/yellow-sport-car-with-black-autotuning-road_114579-5051.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/white-modern-sport-car-parking-road_114579-4025.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/white-modern-sport-car-parking-road_114579-4025.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/black-luxury-sport-sedan-car-standing-race-trace_114579-1169.jpg?size=626&ext=jpg&ga=GA1.1.207808977.1658386615&semt=sph" alt=""/>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default CarSwiper;
