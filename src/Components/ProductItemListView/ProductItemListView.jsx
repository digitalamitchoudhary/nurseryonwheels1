import React, { useContext } from 'react';
import { FaRegHeart } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import '../ProductItemListView/ProductItemListView.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaCartShopping } from "react-icons/fa6";

import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import { MyContext } from '../../App';

function ProductItemListView() {
      const context = useContext(MyContext)

  return (
    <div className="shadow-lg rounded-md border-1 !border-[rgba(0,0,0,0.1)] !overflow-hidden flex items-center">
      <div className="group imgWrapper  rounded-md  w-[25%] !overflow-hidden relative">
        <Link>
        <div  className=" overflow-hidden  !h-[250px]" >
        <img  
          src="https://api.spicezgold.com/download/file_1734529297929_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-0-202307260626.jpg"
          alt=""  className=" object-cover transition-all duration-700"
        />
        <img 
          src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg"
          className=" object-cover w-full transition-all duration-700 absolute top-0 left-0 opacity-0
          group-hover:opacity-100 group-hover:scale-105"
          alt=""
        />
        
       
        </div>
        
        </Link>
        <span className="discount flex items-center absolute top-[10px] rounded-sm left-[10px] z-50 bg-[#ff5252] text-white text-[12px] font-[500] !p-1">10%</span>
 
    
        <div className="action absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] rounded-sm opacity-0 group-hover:opacity-100 group-hover:top-[10px] transition-all duration-300 ease-in-out"> 
        <Tooltip title="Add to Wishlist" arrow  placement="right-start">
          <Button
            sx={{
              width: '35px',
              height: '35px',
              minWidth: '35px',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: '9999px',
              '&:hover': {
                backgroundColor: '#ff5252',
                color: 'white',
              },
              padding: 0,
            }}
          >
            <FaRegHeart style={{ fontSize: '18px' }} />
          </Button>
          </Tooltip>
          <Tooltip title="Zoom" arrow  placement="right-start">

          <Button
            sx={{
              width: '35px',
              height: '35px',
              minWidth: '35px',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: '9999px',
              '&:hover': {
                backgroundColor: '#ff5252',
                color: 'white',
              },
              padding: 0,
            }}
                        onClick={()=>context.setOpenProductDetailModal(true)}

          >
            <MdZoomOutMap style={{ fontSize: '18px' }} />
          </Button>
          </Tooltip>
          <Tooltip title="Compare" arrow  placement="right-start">
          <Button
            sx={{
              width: '35px',
              height: '35px',
              minWidth: '35px',
              color: 'black',
              backgroundColor: 'white',
              borderRadius: '9999px',
              '&:hover': {
                backgroundColor: '#ff5252',
                color: 'white',
              },
              padding: 0,
            }}
          >
            <IoGitCompareOutline style={{ fontSize: '18px' }} />
          </Button>
          </Tooltip>
         
        </div>

      </div>
      <div className="info !p-3 !pb-5 w-[75%] !px-8 !overflow-hidden">
        <p className="text-[15px]  transition-all link text-[#5e5c5c] ">

          <Link to="/"> Catgory</Link>
        </p>
        <h3 className="text-[18px] link title transition-all !mt-3 !mb-3 font-[500] text-[black] ">

          <Link to="/">Apple Smart Watch / Midnight Aluminum </Link>{' '}
        </h3>
        <p className="text-[14px] !mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptates quidem, minus repudiandae incidunt quod sequi nam sed, consequuntur, reiciendis expedita? Veniam voluptates, deleniti voluptatibus obcaecati tempora facilis ab error.</p>
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
        <div className='!mt-3'>
          <Button className='btn-org !px-3 flex gap-1' ><FaCartShopping className=' text-[20px] !mr-1' /> Add to Cart</Button></div>
            
      </div>
    </div>
  );
}

export default ProductItemListView;
