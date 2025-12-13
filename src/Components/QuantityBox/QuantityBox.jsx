import React, { useState } from 'react'
import "./QuantityBox.css"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
function QuantityBox() {
    const[qtyVal,setQtyVal]=useState(1);

    const plusQty=(e)=>{ setQtyVal(qtyVal+1)};
    
    const minusQty=(e)=>{ 
     if(qtyVal===1){setQtyVal(1);}else{setQtyVal(qtyVal-1);}
    
    };

  return (
          <div className="qtybox flex relative items-center">

        <input type="number" value={qtyVal} onChange={(e)=>{
          const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) setQtyVal(val);
        }} className="w-full h-[40px] !p-2 !pl-5 text-[15px] focus:outline-none border-1 border-[rgba(0,0,0,0.2)] rounded-sm" />

        <div className="qtyboxBtn  flex flex-col  border-l-1 border-[rgba(0,0,0,0.2)] absolute right-0 top-0 h-full !overflow-hidden ">
            <button className=" qtyplus text-[14px] !min-w-[25px] !w-[25px] !h-[20px] flex-1 flex link items-center justify-center rounded-tr-sm hover:!bg-[#f1f1f1] border-b-1 border-[rgba(0,0,0,0.2)] " onClick={plusQty}><IoIosArrowUp />
</button>
            <button className=" qtyminus flex-1 !min-w-[25px] !w-[25px] !h-[20px] link text-[14px] flex items-center justify-center rounded-br-sm hover:!bg-[#f1f1f1]" onClick={minusQty}><IoIosArrowDown /></button>


             {/* <Button className="!min-w-[25px] !w-[25px] !h-[20px] !text-black !rounded-none hover:!bg-[#f1f1f1]" onClick={plusQty}>
                    <FaAngleUp className="text-[12px] opacity-55"/>
                </Button>
                <Button className="!min-w-[25px] !w-[25px] !h-[20px] !text-black !rounded-none" onClick={minusQty}>
                    <FaAngleDown className="text-[12px] opacity-55"/>
                </Button> */}
        </div>
    
    </div>
  )
}

export default QuantityBox
