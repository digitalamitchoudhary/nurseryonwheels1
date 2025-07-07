import React from 'react'

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import'./ProductZoom.css'
import 'swiper/css/navigation';
// import required modules
function ProductZoom() {
  return (
    <>
    <div className='flex gap-3' >
      <div className="slider w-[15%]">
        <Swiper 
              direction={"vertical"}
                slidesPerView={5}
               spaceBetween={10}
              //  loop={true}
              
               navigation={true} modules={[Navigation]} className="zoomProcductSliderThumbs h-[500px] overflow-hidden">
                <SwiperSlide>
                  <div className="item rounded-md overflow-hidden cursor-pointer group">
                    <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" className='w-full transition-all group-hover:scale-110' />
                  </div>
                </SwiperSlide> 
                 <SwiperSlide>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" />
                  </div>
                </SwiperSlide> <SwiperSlide>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" />
                  </div>
                </SwiperSlide> <SwiperSlide>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" />
                  </div>
                </SwiperSlide> <SwiperSlide>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" />
                  </div>
                </SwiperSlide> <SwiperSlide>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" />
                  </div>
                </SwiperSlide><SwiperSlide>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" />
                  </div>
                </SwiperSlide><SwiperSlide>
                  <div className="item">
                    <img src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" alt="" />
                  </div>
                </SwiperSlide>


                  </Swiper>
      </div>
      <div className="zoomContainer w-[85%] h-[500px] overflow-hidden"> <InnerImageZoom src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg" zoomType='hover' zoomScale={1}   /></div>
   

    </div>
    </>

  )
}

export default ProductZoom
