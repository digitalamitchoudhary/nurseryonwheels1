import React from 'react'

import Rating from '@mui/material/Rating';
import '../ProductItem/ProductItem.css';
import { Link } from 'react-router-dom';

function ProductItem() {
  return (
    
    <div className='productItem '>
      <div className='imgWrapper overflow-hidden rounded-md   w-[100%] !h-[250px]'><img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg" alt="" />
      </div>
      <div className='info !p-3' >
        <p className='text-[12px]  transition-all link text-[#5e5c5c] '> <Link to='/' > Catgory</Link></p>
        <h3 className='text-[14px] link title transition-all !mt-1 !mb-1 font-[500] text-[black] '> <Link to='/' >Apple Smart Watch / Midnight Aluminum </Link> </h3>
        <Rating name="size-small" defaultValue={4.5} size='small' precision={0.5} readOnly />  </div> 
         </div>
  )
}

export default ProductItem
