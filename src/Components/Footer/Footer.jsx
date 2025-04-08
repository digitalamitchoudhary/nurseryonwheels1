import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { BsWallet2 } from "react-icons/bs";
import { FiGift } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";


function Footer() {
  return (
    <footer className='!py-10 bg-white border-2 border-[rgba(0,0,0,0.1)]'>
        <div className="container">
            <div className="flex items-center justify-center gap-2">
                <div className="col flex items-center flex-col justify-center group w-[20%]">
                    <LiaShippingFastSolid className='text-[50px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]'/>
                   <h3 className='text-[18px] font-[600] !mt-3 '>Free Shipping</h3>
                    <p  className='text-[13px] font-[500]'>For all Orders Over ₹1000</p>
                </div>
                <div className="col flex items-center flex-col justify-center group w-[20%]">
                    <TbTruckReturn  className='text-[50px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]'/>
                   <h3 className='text-[18px] font-[600] !mt-3'>30 Days Returns</h3>
                    <p  className='text-[13px] font-[500]'>For an Exchange Product</p>
                </div>  <div className="col flex items-center flex-col justify-center group w-[20%]">
                    <BsWallet2  className='text-[50px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]'/>
                   <h3 className='text-[18px] font-[600] !mt-3'>Secured Payment</h3>
                    <p  className='text-[13px] font-[500]'>Payment Cards Accepted</p>
                </div>  <div className="col flex items-center flex-col justify-center group w-[20%]">
                    <FiGift  className='text-[50px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]'/>
                   <h3 className='text-[18px] font-[600] !mt-3'>Special Gifts</h3>
                    <p  className='text-[13px] font-[500]'>Our First Product Order</p>
                </div>  <div className="col flex items-center flex-col justify-center group w-[20%]">
                    <BiSupport className='text-[50px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]'/>
                   <h3 className='text-[18px] font-[600] !mt-3'>Support 24/7</h3>
                    <p  className='text-[13px] font-[500]'>Contact us Anytime</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
