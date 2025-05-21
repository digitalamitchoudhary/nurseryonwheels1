 import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import '../ProductListing/Product.css';

import ProductItem from '../../Components/ProductItem/ProductItem';
function ProductListing() {
  return (
    <div className='!py-8'>
      <div className="container">
      <Breadcrumbs aria-label="breadcrumb"> 
        <Link underline="hover" color="inherit"      className='link transition '
 href="/">
         Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/ "
          className='link transition'
        >
          Fashion
        </Link>
       </Breadcrumbs>
      </div>


      <div className="bg-white !p-2 mt-4">
      <div className="container flex gap-3">
        
        <div className="sidebarWrapper bg-white w-[20%] h-full  ">
          <Sidebar/>
        </div>

        <div className=" rightContent   w-[80%]">


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
  
  

        </div>
      </div>
         
    </div>
  )
}

export default ProductListing
