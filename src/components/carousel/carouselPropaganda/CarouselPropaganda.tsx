import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./CarouselPropaganda.css";

// import required modules
import { Scrollbar } from "swiper";
import { Box } from "@mui/material";

 function CarouselPropaganda() {
  return (
    <>
    <Box className="BoxPropaganda">
      <img className="ImgPropaganda" src="https://i.imgur.com/dOdoGPf.jpg" alt="" />
    </Box>
    </>
  );
}

export default CarouselPropaganda;