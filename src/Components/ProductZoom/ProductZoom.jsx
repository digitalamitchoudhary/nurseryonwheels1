import React, { useState } from 'react';

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import './ProductZoom.css';
import 'swiper/css/navigation';
import { useRef } from 'react';
// import required modules
function ProductZoom() {

  
  const [slideIndex, setSlideIndex] = useState(0);

  const zoomSliderBig = useRef( );
    const zoomSliderSml = useRef( );

     const goto = (index)=>{
      setSlideIndex(index);
      zoomSliderSml.current.swiper.slideTo(index)
      zoomSliderBig.current.swiper.slideTo(index)

     }


  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
          ref={zoomSliderBig}
            direction={'vertical'}
            slidesPerView={4}
            spaceBetween={10}
            //  loop={true}

            navigation={true}
            modules={[Navigation]}
            className="zoomProcductSliderThumbs h-[500px] overflow-hidden"
          >
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===0 ? 'opacity-100' : 'opacity-30'}`} onClick={()=>goto(0)}>
                <img
                  src="https://m.media-amazon.com/images/I/71LNviYCwnL._SY741_.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===1?'opacity-100' : 'opacity-30'}`} onClick={()=>goto(1)}>
                <img
                  src="https://m.media-amazon.com/images/I/71sMKAZO70L._SY741_.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===2?'opacity-100' : 'opacity-30'}`}onClick={()=>goto(2)}>
                <img
                  src="https://m.media-amazon.com/images/I/71mU+PBfs2L._SY741_.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />  
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===3?'opacity-100' : 'opacity-30'}`}onClick={()=>goto(3)}>
                <img
                  src="https://m.media-amazon.com/images/I/71LOLDcNtbL._SY741_.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex===4?'opacity-100' : 'opacity-30'}`}onClick={()=>goto(4)}>
                <img
                  src="https://m.media-amazon.com/images/I/71zHEtYDfTL._SY741_.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>



        {/* ********************************************************************************** */}
        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden">
          <Swiper
            // direction={'vertical'}
            ref={zoomSliderSml}
            slidesPerView={1}
            spaceBetween={0}
            //  loop={true}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/71LNviYCwnL._SY741_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/71sMKAZO70L._SY741_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/71mU+PBfs2L._SY741_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/71LOLDcNtbL._SY741_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>

            <SwiperSlide>
              <InnerImageZoom
                src="https://m.media-amazon.com/images/I/71zHEtYDfTL._SY741_.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductZoom;
