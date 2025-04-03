import React from 'react';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import HomeCatSlider from '../../Components/HomeCatSlider/HomeCatSlider';
import { FaShippingFast } from 'react-icons/fa';
import AdsBannerSlider from '../../Components/AdsBannerSlider/AdsBannerSlider';
import '../Home/Home.css';

import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../../Components/ProductsSlider/ProductsSlider';

function Home() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider/>
      <HomeCatSlider />


      <section className='bg-white !py-8'>
        <div className="container overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="left-section">
              <h2 className='text-[20px] font-[600]'>Popular Products</h2>
              <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of March.</p>
            </div>
            <div className="right-section">


              <Box
                sx={{
                  flexGrow: 1,
                  maxWidth: { xs: 320, sm: 780 },
                  bgcolor: 'background.paper',
                }}

              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  aria-label="visible arrows tabs example"
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      '&.Mui-disabled': { opacity: 0.3 },
                    },
                  }}
                >
                  <Tab label="Home" />
                  <Tab label="Fashion" />
                  <Tab label="Electronic" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>
          <ProductsSlider items={6}/>
        </div>
      </section>


      {/* ********************************************  Free Delivery Now Section start *************************************   */}

      <section className="!py-16  bg-white">
        <div className="container">
          <div className="freeShiping  w-[85%] !m-auto !py-4 !p-4 border-2 border-[red] flex items-center justify-between rounded-md !mb-7">
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
          <AdsBannerSlider items={4} />
        </div>

      </section>
      {/* ********************************************  Free Delivery Now Section End *************************************   */}



      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
