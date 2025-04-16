import React from 'react'
import { Link } from 'react-router-dom'
import '../BannerBoxV2/BannerBoxV2.css'
 
function BannerBoxV2(props) {
  return (
        <>
       <div className="bannerBoxV2 w-full h-[210px] overflow-hidden rounded-md group relative">
            <Link to={props.Link} >
                  <img src={props.img} alt="banner" className="!transition-all group-hover:scale-105 duration-150 group-hover:rotate-1 w-full  "/>
                  </Link>

                <div className={`info absolute !p-5 flex flex-col items-center justify-center top-0 ${props.info==="left"? 'left-0' : 'right-0  !pl-15' } w-[70%] h-[100%] gap-2 z-50`}>
                  <h2 className="text-[20px] font-[500]">Samsung Gear VR Camera</h2>
                  <span className="text-[15px] font-[800] w-full  text-[#ff5252]"> ₹ 1,850 </span>
                  <div className='w-full decoration-1'>
                  <Link to="/" className="text-[16px] font-[600] link underline ">Shop Now</Link> 
                  </div>
                </div>
                 </div>
                </>
  )
}

export default BannerBoxV2
