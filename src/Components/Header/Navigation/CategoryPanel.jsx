import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";

function CategoryPanel(props) {

 

    const toggleDrawer = (newOpen) => () => {
         props.setIsOpenCatPanel(newOpen)
      };

      const DrawerList = (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)} 
        >
          <h3 className="!p-3 text-[16px] font-[500] flex item-center justify-between">
            {' '}
            Shop By Categories{' '}
            <IoCloseSharp
              onClick={toggleDrawer(false)}
              className="cursor-pointer text-[20px]"
            />
          </h3>

          <div className="scroll">
            <ul className="w-full">
              <li className="list-none">
                <Button>Fashion</Button>
              </li>
            </ul>
          </div>  
        </Box>
      );
  return (
    < >
       <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel
