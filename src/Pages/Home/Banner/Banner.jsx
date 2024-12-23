// @flow strict

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as React from 'react';
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';



function Banner() {
    return (

<div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src={img1} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={img2} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={img3} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={img4} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={img5} alt=''></img></SwiperSlide>
        <SwiperSlide><img src={img6} alt=''></img></SwiperSlide>
      </Swiper>

</div>
   
    );
};

export default Banner;