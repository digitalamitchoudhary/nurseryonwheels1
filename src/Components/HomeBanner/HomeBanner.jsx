import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "../HomeBanner/HomeBanner.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Button } from '@mui/material';


function HomeBanner() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="HomeSlider"
      >  <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />

            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 !p-8 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[20px] font-[500] w-full text-left -right-[100%] relative opacity-0 !mb-3">Big Saving Days Sales</h4>
              <h2 className="  text-[30px] font-[600] w-full  -right-[100%] relative opacity-0">Buy Modern Chair In Black Color</h2>
              <h3 className=" flex items-center  -right-[100%] relative opacity-0 gap-3 text-[18px] font-[500] text-left w-full !mt-2 !mb-3">Starting At Only
                <span className="text-[30px] font-[800]  text-[#ff5252]"> ₹ 1,550 </span>  </h3>
              <div className='w-full  -bottom-[100%] relative opacity-0 btn_'><Button className='btn-org w-[100px] !p-2'>Shop Now</Button></div>            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />

            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 !p-8 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[20px] font-[500] w-full text-left -right-[100%] relative opacity-0 !mb-3">Big Saving Days Sales</h4>
              <h2 className="  text-[30px] font-[600] w-full  -right-[100%] relative opacity-0">Women Solid Round Green T-Shirt</h2>
              <h3 className=" flex items-center  -right-[100%] relative opacity-0 gap-3 text-[18px] font-[500] text-left w-full !mt-2 !mb-3">Starting At Only
                <span className="text-[30px] font-[800]  text-[#ff5252]"> ₹ 1,850 </span>  </h3>
              <div className='w-full  -bottom-[100%] relative opacity-0 btn_'><Button className='btn-org w-[100px] !p-2'>Shop Now</Button></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />

            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 !p-8 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[20px] font-[500] w-full text-left -right-[100%] relative opacity-0 !mb-3">Big Saving Days Sales</h4>
              <h2 className="  text-[30px] font-[600] w-full  -right-[100%] relative opacity-0">Buy Modern Chair In Black Color</h2>
              <h3 className=" flex items-center  -right-[100%] relative opacity-0 gap-3 text-[18px] font-[500] text-left w-full !mt-2 !mb-3">Starting At Only
                <span className="text-[30px] font-[800]  text-[#ff5252]"> ₹ 1,550 </span>  </h3>
              <div className='w-full  -bottom-[100%] relative opacity-0 btn_'><Button className='btn-org w-[100px] !p-2'>Shop Now</Button></div>  
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />

            <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 !p-8 flex items-center flex-col justify-center transition-all duration-700 ">
              <h4 className="text-[20px] font-[500] w-full text-left -right-[100%] relative opacity-0 !mb-3">Big Saving Days Sales</h4>
              <h2 className="  text-[30px] font-[600] w-full  -right-[100%] relative opacity-0">Women Solid Round Green T-Shirt</h2>
              <h3 className=" flex items-center  -right-[100%] relative opacity-0 gap-3 text-[18px] font-[500] text-left w-full !mt-2 !mb-3">Starting At Only
                <span className="text-[30px] font-[800]  text-[#ff5252]"> ₹ 1,850 </span>  </h3>
              <div className='w-full  -bottom-[100%] relative opacity-0 btn_'><Button className='btn-org w-[100px] !p-2'>Shop Now</Button></div>        </div>
          </div>
        </SwiperSlide>
      </Swiper>




    </div>
  )
}

export default HomeBanner
