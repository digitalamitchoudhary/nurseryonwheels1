import React from 'react'
import { MdDelete } from 'react-icons/md'

function CartPage() {
  return (
    <div>
      
        
        <div className="cart w-full flex justify-center border border-gray-500 !p-4">

            <div className="cartDetails flex justify-around w-[80%]   border border-gray-500 !p-4">
                
                <div className="cartItems w-[80%] bg-white shadow-md !p-4 border border-gray-500">
                    
                       <div className="cartitems w-full !pt-4  border-b !px-2 border-gray-300 !pb-4">
                                  <div className="item   flex gap-4">
                                    <div className=" image overflow-hidden rounded w-[150px] h-[150px]">
                                      <img
                                        src="https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg"
                                        alt=""
                                        className="w-full    object-cover object-top hover:scale-125 transition-all duration-700"
                                      />
                    
                                    </div>
                                    <div className="itemInfo w-full group  relative flex flex-col gap-1">
                    
                                      <h3 className="!text-[1rem]   !font-medium  line-clamp-1">
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
                
                <div className="cartTotal bg-white shadow-md !p-4">

                    <h2>Cart Total</h2>
                    <div className="totalAmount flex justify-between">
                        <span>Total Amount:</span>
                        <span>₹00.00</span>
                    </div>
                    <button className="checkoutBtn w-full bg-green-500 text-white p-2 mt-4 rounded">Proceed to Checkout</button>
                </div>
                </div>


        </div>

    </div>
  )
}

export default CartPage
