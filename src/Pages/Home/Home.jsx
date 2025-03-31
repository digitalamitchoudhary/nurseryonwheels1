import React from 'react';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import HomeCatSlider from '../../Components/HomeCatSlider/HomeCatSlider';
import { FaShippingFast } from 'react-icons/fa';
import AdsBannerSlider from '../../Components/AdsBannerSlider/AdsBannerSlider';
function Home() {
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />

      <section className="!py-16 bg-white">
        <div className="container">
          <div className="freeShiping w-full !py-4 !p-4 border-2 border-[red] flex items-center justify-between rounded-md !mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] uppercase font-[600]">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <p className="font-bold text-[25px]">- Only ₹ 200*</p>
          </div>
          <AdsBannerSlider items={4}/>
        </div>
      
      </section>

      

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
