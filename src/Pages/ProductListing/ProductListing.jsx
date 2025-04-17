 import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function ProductListing() {
  return (
    <div className='!py-8'>
      <div className="container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit"      className='link transition '
 href="/">
         Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/ "
          className='link transition'
        >
          Fashion
        </Link>
       </Breadcrumbs>
      </div>


      <div className="bg-white !p-2 mt-4">
      <div className="container flex gap-3">
        
        <div className="sidebarWrapper bg-white w-[20%] h-full  ">
          <Sidebar/>
        </div>
        </div>
      </div>
         
    </div>
  )
}

export default ProductListing
