import React from 'react'
 
import Rating from '@mui/material/Rating';
 
 
function ProductItem() {
  return (
    <div className='productItem  border-2 w-[200px] !p-4'>
       <div> <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg" alt="" />
       </div> 
       <p className='text-[12px]  transition-all link text-[#5e5c5c] '>Catgory</p>
        <h3 className='text-[14px] link  transition-all  font-[500] text-[black] '>Apple Smart Watch / Midnight Aluminum</h3>
        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />    </div>
  )
}

export default ProductItem
