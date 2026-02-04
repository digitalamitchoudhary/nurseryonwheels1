import { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import { IoClose } from 'react-icons/io5';
import { MyContext } from '../../App';
import './Cartpanel.css';
function Cartpanel() {
  const { open, toggleDrawer } = useContext(MyContext);

  return (
    <div>
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        <div className="w-[400px]  h-full flex flex-col !pt-4   ">
          
          {/* ================= HEADER ================= */}
          <div className="relative cartheading flex items-center !pr-4 !pl-4 !pb-2 border-b  border-gray-300 gap-2 justify-between">
            <h2 className="text-lg !pt-1.5 font-semibold ">
              Your Shopping Cart (0)
            </h2>
            {/* btuton to close */}
            <Button
              onClick={toggleDrawer(false)}
              className="!absolute !w-[40px] !h-[40px] !min-w-[40px]  !text-black !rounded-full !top-0 !right-4 hover:!bg-gray-200"
            >
              <IoClose className="!text-[22px] !text-black" />
            </Button>
          </div>

                  {/* ================= CART ITEMS ================= */}

          <div className="cartItemsContainer flex-1 overflow-y-auto overflow-x-hidden > ">
            <div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div><div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div><div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div><div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div><div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div><div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div><div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div><div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div><div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div><div className="cartitems w-full !pt-4  border-b !px-4 border-gray-300 !pb-4">
              <div className="item   flex gap-4">
                <div className=" image overflow-hidden rounded w-[100px] h-[80px]">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                    alt=""
                    className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                  />

                </div>
                <div className="itemInfo group  relative flex flex-col gap-1 justify-center">

                  <h3 className="!text-[0.90rem]   !font-medium  line-clamp-1">
                    Floral Beads and Stones Pure Chiffon Saree
                  </h3>

                  <div className="  flex  items-center gap-3" >

                    <span className="!text-sm !font-medium !text-gray-600"> Qty: 1 </span>
                    <span className="price font-bold  text-[#ff5252] text-[14px]">
                      ₹3,999.00
                    </span>

                  </div>
               
                  
                   {/* delete button */}
                  <button
                    className="
                      absolute  top-0 right-0
                      w-[32px] h-[32px]
                      rounded-full
                      opacity-80
                      text-black
                      flex items-center justify-center
                      shadow-md
                       scale-80
                      transition-all duration-300 ease-in-out
                      group-hover:opacity-100
                      group-hover:scale-100
                      hover:bg-[#ff5252] hover:text-white
                      active:scale-90
                    "
                    onClick={() => console.log('delete item')}
                  >
                    <MdDelete size={18} />
                  </button>

                </div>
                
                                
              </div>
            </div>
          </div>
        

          
            <div className="  !pt-24  !pb-5   cartAmountContainer  bg-white  w-full  ">
              <div className="cartitemAmoun flex flex-col gap-2 !px-2 ">
                 <div className=" flex justify-between items-center  border-gray-400 border-t  !py-2 !px-4" >

                    <span className="!text-[14px] !font-bold !text-black">11 item </span>
                    <span className="price font-bold  text-[#ff5252] text-[16px]">
                      ₹3,999.00
                    </span>

                  </div>

                   <div className=" flex justify-between border-gray-400 items-center border-t  !py-2 !px-4" >

                    <span className="!text-[14px] !font-bold !text-black">Total (tax excl.) </span>
                    <span className="price font-bold  text-[#ff5252] text-[16px]">
                      ₹3,999.00
                    </span>

                  </div>

                 <div className="cartButton flex justify-between  items-center !px-2 w-full !mt-4">
  
  <Button
    href='/mycart'
    variant="contained"
    disableElevation
    className="btn-org !text-white !py-2.5 !px-12 !rounded-md"
  >
    View Cart
  </Button>

  <Button
        href='/checkout'
    variant="outlined"
    disableElevation
    sx={{
      borderColor: '#ff5252',
      color: '#000',
      '&:hover': {
        backgroundColor: '#000',
        color: '#fff',
        borderColor: '#000',
      },
    }}
    className="!py-2  !px-12 !rounded-md"
  >
   Checkout
  </Button>

</div>

              </div>
            </div>
          
           
        </div>
      </Drawer>
    </div>
  );
}

export default Cartpanel;
