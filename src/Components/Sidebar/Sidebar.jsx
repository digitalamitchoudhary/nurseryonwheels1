import React, { useState } from 'react';
import '../Sidebar/Sidebar.css';
 import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Collapse} from 'react-collapse';
import { FaAngleDown,FaAngleUp } from "react-icons/fa6";
import Button from '@mui/material/Button';
function Sidebar() {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true)

  return (
    <div className="sidebar !py-5">
      <div className="box">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center !pr-5"> Shop by Category <Button className=" !text-[black] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto" onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)} >
          
          {isOpenCategoryFilter===true ?<FaAngleUp/> :<FaAngleDown />}
          
          
        </Button></h3> 
        <Collapse isOpened={isOpenCategoryFilter}>
    
        <div className="scroll !px-4 relative -left-[13px]">
       
         <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className='w-full'/>
        <FormControlLabel control={<Checkbox size="small" />} label="Electroinc"className='w-full'/>
        <FormControlLabel control={<Checkbox size="small" />} label="Bags" className='w-full'/>
        <FormControlLabel control={<Checkbox size="small" />} label="Footwear" className='w-full'/>
        <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className='w-full'/>
        <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className='w-full'/>
        <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className='w-full'/>
        <FormControlLabel control={<Checkbox  size="small"/>} label="Jewellery" className='w-full'/>



        </div>  
        </Collapse>

      </div>
    </div>
  );
}

export default Sidebar;
