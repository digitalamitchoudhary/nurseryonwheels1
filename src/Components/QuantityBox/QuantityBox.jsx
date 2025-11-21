import React, { useState } from 'react'

function QuantityBox() {
    const qtyVal = 1;
    useState[qtyVal,setQtyVal]=useState(1);
    const plusQty=(e)=>{ setQtyVal(qtyVal+1)};
const minusQty=(e)=>{ 
     if(qtyVal===1){setQtyVal(1);}else{setQtyVal(qtyVal-1);}
    
    };

  return (
            <div className="qtybox  ">

        <input type="number"  value={qtyVal} onChange={(e)=>{
            const value = parseInt(e.target.value)
        }} className="w-full h-[40px]  !p-2 !pl-5"/>
    </div>
  )
}

export default QuantityBox
