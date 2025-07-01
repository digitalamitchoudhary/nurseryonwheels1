import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '@mui/material';

function ProductDetails() {
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
      
    <div className="container flex gap-4">
        <div className="productZoomContainer"></div>
    </div>

    </div>
  )
}

export default ProductDetails
