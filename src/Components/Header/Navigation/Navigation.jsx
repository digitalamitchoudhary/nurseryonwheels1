import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { GoRocket } from "react-icons/go";
import CategoryPanel from './CategoryPanel';
import '../Navigation/styles.css';


function Navigation() {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false)
  
    const openCategoryPanel= (params)=> {
      setIsOpenCatPanel(true);
    }

  return (<>
    <nav className="!py-2">
      <div className="container flex items-center justify-end gap-8  ">
        <div className="col_1  w-[20%]">
          <Button className="!text-black w-full gap-2 " onClick={openCategoryPanel}>
            <RiMenu2Fill className="text-[18px]" />
            Shop By Categories
            <LiaAngleDownSolid className="text-[13px] !ml-auto font-bold" />
          </Button>
        </div>
        <div className="col_2  w-[60%]">
          <ul className="flex items-center gap-5 nav">
            <li className="list-none ">
              <Link to="/" className="link transitions text-[14px] font-[500] "> Home </Link>
            </li>
            <li className="list-none relative">
              <Link to="/" className="link transitions text-[14px] font-[500] "> Fashion </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 ">
                  <ul>

                  <li className="list-none w-full relative ">
                    <Link to="/" className="w-full">
                    <Button className="!text-[rgba(0,0,0,0.8)]  !rounded-none !text-left w-full !justify-start ">Men</Button>
                    <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 ">
                  <ul>

                  <li className="list-none w-full ">
                    <Link to="/" className="w-full">
                    <Button className="!text-[rgba(0,0,0,0.8)]  !rounded-none !text-left w-full !justify-start ">Men</Button>
                    
                    </Link>
                    </li>
                
                  <li className="list-none">
                  <Link to="/" className="w-full">
                    <Button className="!text-[rgba(0,0,0,0.8)]  !rounded-none !text-left w-full !justify-start ">Women</Button>
                    </Link>

                  </li>
                  <li className="list-none">
                  <Link to="/" className="w-full">
                    <Button className="!text-[rgba(0,0,0,0.8)]  !rounded-none !text-left w-full !justify-start ">girls</Button>
                    </Link>

                  </li>
                  <li className="list-none">
                  <Link to="/" className="w-full">
                    <Button className="!text-[rgba(0,0,0,0.8)]  !rounded-none !text-left w-full !justify-start ">boys</Button>
                    </Link>

                  </li>
                  </ul>
                </div>
                    </Link>
                    </li>
                
                  <li className="list-none">
                  <Link to="/" className="w-full">
                    <Button className="!text-[rgba(0,0,0,0.8)]  !rounded-none !text-left w-full !justify-start ">Women</Button>
                    </Link>

                  </li>
                  <li className="list-none">
                  <Link to="/" className="w-full">
                    <Button className="!text-[rgba(0,0,0,0.8)]  !rounded-none !text-left w-full !justify-start ">girls</Button>
                    </Link>

                  </li>
                  <li className="list-none">
                  <Link to="/" className="w-full">
                    <Button className="!text-[rgba(0,0,0,0.8)]  !rounded-none !text-left w-full !justify-start ">boys</Button>
                    </Link>

                  </li>
                  </ul>
                </div>
              
            </li>
            <li className="list-none">
              <Link to="/" className="link transitions text-[14px] font-[500] "> Electroinc </Link>
            </li><li className="list-none">
              <Link to="/" className="link transitions text-[14px] font-[500] "> Bags </Link>
            </li><li className="list-none">
              <Link to="/" className="link transitions text-[14px] font-[500] "> Footwear </Link>
            </li><li className="list-none">
              <Link to="/" className="link transitions text-[14px] font-[500] "> Groceries </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transitions text-[14px] font-[500] "> Beauty </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transitions text-[14px] font-[500] "> Wellness </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transitions text-[14px] font-[500] "> Jewellery </Link>
            </li>
          </ul>
        </div>
        <div className="col_3 w-[20%]">
            <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'><GoRocket className='text-[18px]'/>
            Free International Delivery</p>
        </div>
      </div>
    </nav>
    
    <CategoryPanel  isOpenCatPanel={isOpenCatPanel}
    setIsOpenCatPanel={setIsOpenCatPanel}/>
    </>

 
  );
}

export default Navigation;
