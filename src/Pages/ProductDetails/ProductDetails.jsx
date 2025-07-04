
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '@mui/material';
import ProductZoom from '../../Components/ProductZoom/ProductZoom';

function ProductDetails() {
  return (

    <>
     <div className="!py-5">
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
      

    </div>
    <section className='bg-white !py-5'>
     <div className="container flex gap-4">
        <div className="productZoomContainer w-[25%]">
 
        <ProductZoom/>

            
        </div>
    </div></section>
    </>
  )
}

export default ProductDetails
