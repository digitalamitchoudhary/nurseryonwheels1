import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import '../ProductListing/ProductListing.css';
import { IoGridSharp } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ProductItem from '../../Components/ProductItem/ProductItem';
import ProductItemListView from '../../Components/ProductItemListView/ProductItemListView';
import Pagination from '@mui/material/Pagination';

import Menu from '@mui/material/Menu';

import { Button } from '@mui/material';
function ProductListing() {
  const [ itemView, setItemView] = useState('grid');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="!py-8 !pb-0">
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
              <div className="col1 flex items-center itemViewActions">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView==='list'&& 'active'}`} 
                  onClick={() => setItemView('list')}
                >
                  <LuMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${itemView==='grid'&& 'active'}`} 
                  onClick={() => setItemView('grid')}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className="text-[14px] font-[500] !pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 27 products
                </span>
              </div>

              <div className="col2 !ml-auto justify-end gap-3 !pr-4 flex items-center ">
                <span className="text-[14px] font-[500] !pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By
                </span>
                <Button
                  id="fade-button"
                  aria-controls={open ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[12px] !text-[#000]  !capitalize"
                >
                  Sales, highest to lowest
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
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[13px] !text-[#000]  !capitalize"
                  >
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[13px] !text-[#000]  !capitalize"
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[13px] !text-[#000]  !capitalize"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[13px] !text-[#000]  !capitalize"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[13px] !text-[#000]  !capitalize"
                  >
                    Name, Z to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[13px] !text-[#000]  !capitalize"
                  >
                    Price, low to high
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className=" !text-[13px] !text-[#000]  !capitalize"
                  >
                    Price, high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div className={`grid pro  ${itemView==='grid' ? 'grid-cols-4 md:grid-cols-4': 'grid-cols-1 md:grid-cols-1' } gap-4`}>
              {itemView === 'grid' ? (
                <>
                  
                  <ProductItem test='shadow-lg !rounded-md !border-1 !border-[rgba(0,0,0,0.1)] !overflow-hidden  items-center' />
                  <ProductItem test='shadow-lg !rounded-md !border-1 !border-[rgba(0,0,0,0.1)] !overflow-hidden  items-center' />
                  <ProductItem test='shadow-lg !rounded-md !border-1 !border-[rgba(0,0,0,0.1)] !overflow-hidden  items-center' />
                  <ProductItem test='shadow-lg !rounded-md !border-1 !border-[rgba(0,0,0,0.1)] !overflow-hidden  items-center' />
                  <ProductItem test='shadow-lg !rounded-md !border-1 !border-[rgba(0,0,0,0.1)] !overflow-hidden  items-center' />
                  <ProductItem test='shadow-lg !rounded-md !border-1 !border-[rgba(0,0,0,0.1)] !overflow-hidden  items-center' />
                  <ProductItem test='shadow-lg !rounded-md !border-1 !border-[rgba(0,0,0,0.1)] !overflow-hidden  items-center' />
                  <ProductItem test='shadow-lg !rounded-md !border-1 !border-[rgba(0,0,0,0.1)] !overflow-hidden  items-center' />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
              <div className='flex justify-center items-center !mt-10'><Pagination count={10} showFirstButton showLastButton /></div>
            
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
