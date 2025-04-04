import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import '../ProductItem/ProductItem.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";

function ProductItem() {
  return (
    <div className="productItem ">
      <div className="imgWrapper overflow-hidden rounded-md  w-[100%] !h-[220px] relative">
        <img
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/86-home_default/hummingbird-cushion.jpg"
          alt=""
        />
        <span className="discount flex items-center absolute top-[10px] rounded-sm left-[10px] z-50 bg-[#ff5252] text-white text-[12px] font-[500] !p-1">10%</span>

        <div className="action absolute top-[15px] rounded-sm right-[15px] z-50 flex items-center gap-4 flex-col w-[80px]">
          <Button className='!w-[45px] !h-[45px] !min-w-[45px] text-black rounded-full bg-white hover:bg-[#ff5252] hover:text-white  '><FaRegHeart /> </Button>
          {/* <Button><IoGitCompareOutline /> </Button>  
          <Button><MdZoomOutMap /> </Button> */}
        </div>

      </div>
      <div className="info !p-3 !pb-5">
        <p className="text-[12px]  transition-all link text-[#5e5c5c] ">
          
          <Link to="/"> Catgory</Link>
        </p>
        <h3 className="text-[14px] link title transition-all !mt-1 !mb-1 font-[500] text-[black] ">
        
          <Link to="/">Apple Smart Watch / Midnight Aluminum </Link>{' '}
        </h3>
        <Rating
          name="size-small"
          defaultValue={4.5}
          size="small"
          precision={0.5}
          readOnly
        />

        <div className="flex items-center gap-3 font-[600]">
          <span className="oldPrice line-through text-gray-500 text-[15px]">₹530</span>
          <span className="price text-[#ff5252] text-[15px]">₹530</span>

        </div>
      </div>
    </div>
  );
}

export default ProductItem;
