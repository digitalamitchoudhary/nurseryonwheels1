import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../HomeCatSlider/HomeCatSlider.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import {Navigation } from 'swiper/modules';
function HomeCatSlider() {
  return (
    <>
        <div className='homeCatSlider !pt-4 !py-8' >
      <div className="container  overflow-hidden !px-4  ">
      <Swiper 
        slidesPerView={7}
       spaceBetween={20}
       loop={true}
      
       navigation={true} modules={[Navigation]} className="mySwiper !overflow-visible ">
        <SwiperSlide>
          <div className="item !py-7 !px-3 overflow-hidden bg-white rounded-sm text-center flex items-center justify-center flex-col ">
            <img src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" alt="" className="w-[60px]"/>
            <h3 className='!text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="item !py-7 !px-3 overflow-hidden bg-white rounded-sm text-center flex items-center justify-center flex-col ">
            <img src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" alt="" className="w-[60px]"/>
            <h3 className='!text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          
        </SwiperSlide> <SwiperSlide>
          <div className="item !py-7 !px-3 overflow-hidden bg-white rounded-sm text-center flex items-center justify-center flex-col ">
            <img src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" alt="" className="w-[60px]"/>
            <h3 className='!text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          
        </SwiperSlide> <SwiperSlide>
          <div className="item !py-7 !px-3 overflow-hidden bg-white rounded-sm text-center flex items-center justify-center flex-col ">
            <img src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" alt="" className="w-[60px]"/>
            <h3 className='!text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          
        </SwiperSlide> <SwiperSlide>
          <div className="item !py-7 !px-3 overflow-hidden bg-white rounded-sm text-center flex items-center justify-center flex-col ">
            <img src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" alt="" className="w-[60px]"/>
            <h3 className='!text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          
        </SwiperSlide> <SwiperSlide>
          <div className="item !py-7 !px-3 overflow-hidden bg-white rounded-sm text-center flex items-center justify-center flex-col ">
            <img src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" alt="" className="w-[60px]"/>
            <h3 className='!text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          
        </SwiperSlide> <SwiperSlide>
          <div className="item !py-7 !px-3 overflow-hidden bg-white rounded-sm text-center flex items-center justify-center flex-col ">
            <img src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" alt="" className="w-[60px]"/>
            <h3 className='!text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          
        </SwiperSlide> <SwiperSlide>
          <div className="item !py-7 !px-3 overflow-hidden bg-white rounded-sm text-center flex items-center justify-center flex-col ">
            <img src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" alt="" className="w-[60px]"/>
            <h3 className='!text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          
        </SwiperSlide> <SwiperSlide>
          <div className="item !py-7 !px-3 overflow-hidden bg-white rounded-sm text-center flex items-center justify-center flex-col ">
            <img src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" alt="" className="w-[60px]"/>
            <h3 className='!text-[15px] font-[500] !mt-3'>Smart Tablet</h3>
          </div>
          
        </SwiperSlide>
       
       
       
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default HomeCatSlider
