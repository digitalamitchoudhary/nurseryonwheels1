import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../ProductsSlider/ProductSlider.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import {Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem/ProductItem';
function ProductsSlider(props) {
  return (<>
  
  <div className="productsSlider flex  rounded-md !mt-3.5 !p-1 !pr-1.5 overflow-hidden ">
       <Swiper  
               slidesPerView={props.items}
              spaceBetween={2}
              loop={true}
              
              navigation={true} modules={[Navigation]} className="ySwiper">
               <SwiperSlide >
                 <ProductItem />
                 
               </SwiperSlide>
               <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>  <SwiperSlide>
                 <ProductItem/>
                 
               </SwiperSlide>
               </Swiper>
    </div>
 
    </>
  )
}

export default ProductsSlider
