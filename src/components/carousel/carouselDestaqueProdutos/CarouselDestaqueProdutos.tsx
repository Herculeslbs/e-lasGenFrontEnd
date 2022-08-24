import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarouselDestaqueProdutos.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

 function CarouselDestaqueProdutos() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="Slide"><img src="https://i.imgur.com/QHfMSpr.png" alt="" /></SwiperSlide>
        <SwiperSlide className="Slide"><img src="https://i.imgur.com/NuG1Ci7.png" alt="" /></SwiperSlide>
        <SwiperSlide className="Slide"><img src="https://i.imgur.com/6go8EO1.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default CarouselDestaqueProdutos;
