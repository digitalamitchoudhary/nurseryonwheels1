import React from 'react'
 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../AdsBannerSlider/AdsBannerSlider.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import {Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox/BannerBox';
function AdsBannerSlider(props) {
  return (
    <div className='!py-5 w-full'>
       <Swiper 
              slidesPerView={props.items}
             spaceBetween={10}
             loop={true}
            
             navigation={true} modules={[Navigation]} className="adsSlides">
               <SwiperSlide>
              <BannerBox Link={'/ss'} img={'https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp'}/>
              </SwiperSlide> <SwiperSlide>
              <BannerBox Link={'/ss'} img={'https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp'}/>
              </SwiperSlide> <SwiperSlide>
              <BannerBox Link={'/ss'} img={'https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp'}/>
              </SwiperSlide> <SwiperSlide>
              <BannerBox Link={'/ss'} img={'https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp'}/>
              </SwiperSlide>
              </Swiper>
    </div>
  )
}

export default AdsBannerSlider
