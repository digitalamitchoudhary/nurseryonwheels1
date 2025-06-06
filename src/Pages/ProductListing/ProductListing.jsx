import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import '../ProductListing/Product.css';
import { IoGridSharp } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ProductItem from '../../Components/ProductItem/ProductItem';
import Menu from '@mui/material/Menu';

import  { Button } from '@mui/material';
function ProductListing() {

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};



  return (
    <div className="!py-8">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            className="link transition "
            href="/"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/ "
            className="link transition"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white !p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper bg-white w-[20%] h-full  ">
            <Sidebar />
          </div>

          <div className=" rightContent  !py-3 w-[80%]">
            <div className=" bg-[#f1f1f1]  !p-2 w-full !mb-4 rounded-md flex items-center">
              

              <div className="col1 flex items-center ">
               
                <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]">
                  <LuMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button> <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000]">
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className='text-[14px] font-[500] !pl-3 text-[rgba(0,0,0,0.7)]'>There are 27 products</span>
              </div>

              <div className="col2 !ml-auto justify-end flex items-center ">
               
               
                <span className='text-[14px] font-[500] !pl-3 text-[rgba(0,0,0,0.7)]'>Sort By</span>
                 <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
                 <Menu
        id="fade-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'fade-button',
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
              </div>
            </div>

            <div className="grid pro  grid-cols-4 md:grid-cols-4 gap-4">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
