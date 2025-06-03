import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import '../ProductListing/Product.css';
import { IoGridSharp } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';

import ProductItem from '../../Components/ProductItem/ProductItem';
import { Button } from '@mui/material';
function ProductListing() {
  return (
    <div className="!py-8">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            className="link transition "
            href="/"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/ "
            className="link transition"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white !p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper bg-white w-[20%] h-full  ">
            <Sidebar />
          </div>

          <div className=" rightContent   w-[80%]">
            <div className=" bg-[#f1f1f1]  !p-2 w-full !mb-3 rounded-md flex items-center">
              

              <div className="col1 flex items-center ">
               
                <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]">
                  <LuMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button> <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]">
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>
              </div>
            </div>

<<<<<<< HEAD
            <div className="grid pro  grid-cols-4 md:grid-cols-4 gap-4">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
=======
        <div className="grid pro  grid-cols-4 md:grid-cols-4 gap-4">
           
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>

        </div>

        </div>
  
  

>>>>>>> fbbed0ff7d6e9ae13804802b59cf10250e1c3f82
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
