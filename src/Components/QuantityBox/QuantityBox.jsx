import React, { useState } from 'react'
import "./QuantityBox.css"
function QuantityBox() {
    const[qtyVal,setQtyVal]=useState(1);

    const plusQty=(e)=>{ setQtyVal(qtyVal+1)};
    
    const minusQty=(e)=>{ 
     if(qtyVal===1){setQtyVal(1);}else{setQtyVal(qtyVal-1);}
    
    };

  return (
          <div className="qtybox  ">

        <input type="number" value={qtyVal} onChange={(e)=>{
          const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) setQtyVal(val);
        }} className="w-full h-[40px] !p-2 !pl-5 text-[15px] focus:outline-none border-1 border-[rgba(0,0,0,0.2)] rounded-md" />
    </div>
  )
}

export default QuantityBox
