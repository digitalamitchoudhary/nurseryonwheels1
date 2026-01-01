import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '@mui/material';
import ProductZoom from '../../Components/ProductZoom/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import './ProductDetails.css';
import { useState } from 'react';
import QuantityBox from '../../Components/QuantityBox/QuantityBox';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";

function ProductDetails() {
  const [productActionIndex, setProductActionIndex] = useState(null);

  const[activeTab,setActiveTab]=useState("description");

  return (
    <>
  
      <div className="!py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
              to="/"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Chikankari Woven Kurta
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white !py-5">
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[40%] ">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] ">
            <h1 className="text-[25px] font-[600] !mb-2">
              Chikankari Woven Kurta
            </h1>
            <div className="flex items-center gap-3 ">
              <span className="text-gray-400  text-[13px]">
                Brands : <span className="font-[500] text-black opacity-75"> House of Chikankari test</span>
              </span>

              <Rating
                name="size-small"
                defaultValue={4.5}
                size="small"
                precision={0.5}
                readOnly
              />
              <span className="text-[#666] cursor-pointer text-[13px]">
                Reviesw(5) 
              </span>
            </div>

            <div className="flex items-center gap-3  !mt-4">
              <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
                ₹530
              </span>
              <span className="price text-[#ff5252] text-[20px] font-[600]">
                ₹530
              </span>

              <span className="text-[14px]  text-gray-500">
                Available In Stock :{' '}
                <span className="text-green-600 text-[14px] font-[600]">
                  147 Items
                </span>
              </span>
            </div>

            <p className="!mt-3 !pr-10 !mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              neque rem id, sint nisi consequatur mollitia, consequuntur tenetur
              optio exercitationem vero officiis aliquid cupiditate temporibus
              corrupti fuga consectetur suscipit praesentium! In enim sequi
              facilis nam quibusdam deleniti eos fugit cum optio, quo
              consectetur totam officiis ipsa eveniet. Itaque, animi ratione!
            </p>
            {/* size buttons start*/}
            <div className="flex items-center gap-3">
              <span className="text-[16px]">Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`border border-gray-300 rounded-md px-4 py-2 mx-1 ${
                    productActionIndex === 0
                      ? '!bg-primary !text-white'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>

                <Button
                  className={`border border-gray-300 rounded-md px-4 py-2 mx-1 ${
                    productActionIndex === 1
                      ? '!bg-primary !text-white'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>

                <Button
                  className={`border border-gray-300 rounded-md px-4 py-2 mx-1 ${
                    productActionIndex === 2
                      ? '!bg-primary !text-white'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>

                <Button
                  className={`border border-gray-300 rounded-md px-4 py-2 mx-1 ${
                    productActionIndex === 3
                      ? '!bg-primary !text-white'
                      : 'bg-white text-black'
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>

              {/* size buttons end*/}
            </div>
            <p className="text-[14px] !mt-5 !mb-2 text-black">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            {/* qutintity box component start */}
            <div className="flex items-center gap-4 !mt-4 ">
              <div className='qtyboxWrapper !w-[70px]'><QuantityBox/></div>
              <Button className='btn-org !px-4 flex !text-[16px] gap-1'> <FaCartShopping className=' text-[20px] !mr-1' /> Add to Cart</Button>
            </div>
            {/* quantity box component end */}
                
                {/* Add Wishlist component start */}
            <div className=' flex items-center gap-9 text-[14px] font-[400]  text-[#131212] !mt-8 cursor-pointer'>

             <span className="flex items-center gap-2 text-[14px] sm:text-[15px] link cursor-pointer font-[500]"> <FaRegHeart /> Add to Wishlist </span>
                            <span className="flex items-center gap-2 text-[14px] sm:text-[15px] link cursor-pointer font-[500]"> <IoIosGitCompare />Add to Compare </span>

            </div>
             {/* Add Wishlist component end */}
          </div>
        </div>

        <div className="container !mt-10">
        
          <h2 className="text-[22px] font-[600] !mb-4">Product Details</h2>
          <div className='flex gap-8'>
                  <button className={`text-[17px] font-[500] ${activeTab==="description" ? "text-primary  !px-4 py-2 rounded-md" : "  text-black px-4 py-2 rounded-md"} hover:text-primary transition-colors`} onClick={() => setActiveTab("description")}>Description</button>
                  <button className={`text-[17px] font-[500] ${activeTab==="productdetail" ? "text-primary  !px-4 py-2 rounded-md" : "  text-black px-4 py-2 rounded-md"} hover:text-primary transition-colors`} onClick={() => setActiveTab("productdetail")}>Product Details</button>
                  <button className={`text-[17px] font-[500] ${activeTab==="review" ? "text-primary  !px-4 !py-2 rounded-md" : "  text-black px-4 py-2 rounded-md"} hover:text-primary transition-colors`} onClick={() => setActiveTab("review")}>Reviews (0)</button>

                  
          </div>
            {activeTab==="description" && (
                    <div className="shadow-md w-full !py-5 !px-8 rounded-md text-[14px] bg-gray-50 !mt-4">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                  )}  {activeTab==="productdetail" && (
                    <div className="shadow-md w-full !py-5 !px-8 rounded-md text-[14px] bg-gray-50 !mt-4">
                      <p>Product detail content goes here.</p>
                      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
 <table className="w-full text-sm text-left rtl:text-right text-body">
 <thead className="bg-neutral-secondary-soft border-b border-default">
<tr >
<th scope="col" className="!px-6 !py-3 bg-gray-200  font-semibold">
  Product name
 </th>
  <th scope="col" className="!px-6 !py-3 bg-gray-200  font-semibold">
  Color
  </th>
  <th scope="col" className="!px-6 !py-3 bg-gray-200  font-semibold">
  Category
 </th>
  <th scope="col" className="!px-6 !py-3 bg-gray-200  font-semibold">
  Price
  </th>
 <th scope="col" className="!px-6 !py-3 bg-gray-200  font-semibold">
  Action
 </th>
 </tr>
  </thead>

 <tbody>
 <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
<th scope="row"
 className="!px-6 !py-4 font-medium text-heading whitespace-nowrap"
 >
Apple MacBook Pro 17&quot;
        </th>
        <td className="!px-6 !py-4">Silver</td>
        <td className="!px-6 !py-4">Laptop</td>
        <td className="!px-6 !py-4">$2999</td>
        <td className="!px-6 !py-4">
          <a href="#" className="font-medium text-fg-brand hover:underline">
            Edit
          </a>
        </td>
      </tr>

      <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
        <th
          scope="row"
          className="!px-6 !py-4 font-medium text-heading whitespace-nowrap"
        >
          Microsoft Surface Pro
        </th>
        <td className="!px-6 !py-4">White</td>
        <td className="!px-6 !py-4">Laptop PC</td>
        <td className="!px-6 !py-4">$1999</td>
        <td className="!px-6 !py-4">
          <a href="#" className="font-medium text-fg-brand hover:underline">
            Edit
          </a>
        </td>
      </tr>

      <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
        <th
          scope="row"
          className="!px-6 !py-4 font-medium text-heading whitespace-nowrap"
        >
          Magic Mouse 2
        </th>
        <td className="!px-6 !py-4">Black</td>
        <td className="!px-6 !py-4">Accessories</td>
        <td className="!px-6 !py-4">$99</td>
        <td className="!px-6 !py-4">
          <a href="#" className="font-medium text-fg-brand hover:underline">
            Edit
          </a>
        </td>
      </tr>

      <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
        <th
          scope="row"
          className="!px-6 !py-4 font-medium text-heading whitespace-nowrap"
        >
          Google Pixel Phone
        </th>
        <td className="!px-6 !py-4">Gray</td>
        <td className="!px-6 !py-4">Phone</td>
        <td className="!px-6 !py-4">$799</td>
        <td className="!px-6 !py-4">
          <a href="#" className="font-medium text-fg-brand hover:underline">
            Edit
          </a>
   </td>
      </tr>

      <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft">
        <th
          scope="row"
          className="!px-6 !py-4 font-medium text-heading whitespace-nowrap"
        >
          Apple Watch 5
        </th>
        <td className="!px-6 !py-4">Red</td>
        <td className="!px-6 !py-4">Wearables</td>
        <td className="!px-6 !py-4">$999</td>
        <td className="!px-6 !py-4">
          <a href="#" className="font-medium text-fg-brand hover:underline">
            Edit
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
                    </div>
                  )}
                  {activeTab==="review" && (
                    <div className="!mt-4">
                      <p>Review content goes here.</p>

                    <div className="shadow-md w-full !py-5 !px-8 rounded-md text-[14px] bg-gray-50 !mt-4">
                        <div className=" border-red-400  border-2 w-full productReviwerContainer">
                          <div className="scroll !m-5 border-2  w-[70%]       ">s
                            
                          </div>
                        </div>
                      </div>

                    </div>
                  )}
        </div>
      
      </section>
    </>
  );
}

export default ProductDetails;