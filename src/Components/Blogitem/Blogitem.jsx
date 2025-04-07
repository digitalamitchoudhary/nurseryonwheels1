import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";


function Blogitem() {
  return (
    <div className='blogItem group   '>
        <div className='imgWrapper  w-[100%] overflow-hidden rounded-md cursor-pointer relative'> 
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/lg-b-blog-6.jpg" className='w-full transition-all group-hover:rotate-1 group-hover:scale-105' alt="blog image" /> 
            <span className='flex items-center justify-center  m-auto   rounded-sm  z-50 bg-[#ff5252] !p-1 !pr-2 gap-1 text-[11px] font-[500] text-white absolute bottom-[10%] left-[60%] '><IoMdTime className='text-[16px]' /> 5 April 2025
            </span>
         </div>
         <div className="bloginfo !p-2 !py-4"> 
            
                <h2 className='text-[15px] font-[600] text-black !mb-3'><Link to='/' className='link'>Nullam ullamcorper ornare molestie</Link></h2>
                <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] !mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, inventore.</p>
                <Link className='link font-[500] text-[13px] underline flex items-center gap-1'>Read More <IoIosArrowForward />
                </Link>

         </div>
       
    </div>
  )
}

export default Blogitem

