import React from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { TbTruckReturn } from 'react-icons/tb';
import { BsWallet2 } from 'react-icons/bs';
import { FiGift } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { IoChatboxOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../Footer/Footer.css';
import { FaFacebookF,FaInstagram} from 'react-icons/fa';
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

 

function Footer() {
  return (
    <footer className="!py-5 bg-[#f1f1f1] ">
      <div className="container">
        <div className="flex items-center justify-center gap-2 !py-8 !pb-8">
          <div className="col flex items-center flex-col justify-center group w-[20%]">
            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]" />
            <h3 className="text-[16px] font-[600] !mt-3 !mb-2 ">
              Free Shipping
            </h3>
            <p className="text-[13px] font-[400]">For all Orders Over ₹1000</p>
          </div>
          <div className="col flex items-center flex-col justify-center group w-[20%]">
            <TbTruckReturn className="text-[40px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]" />
            <h3 className="text-[16px] font-[600] !mt-3 !mb-2">
              30 Days Returns
            </h3>
            <p className="text-[13px] font-[400]">For an Exchange Product</p>
          </div>{' '}
          <div className="col flex items-center flex-col justify-center group w-[20%]">
            <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]" />
            <h3 className="text-[16px] font-[600] !mt-3 !mb-2">
              Secured Payment
            </h3>
            <p className="text-[13px] font-[400]">Payment Cards Accepted</p>
          </div>{' '}
          <div className="col flex items-center flex-col justify-center group w-[20%]">
            <FiGift className="text-[40px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]" />
            <h3 className="text-[16px] font-[600] !mt-3 !mb-2">
              Special Gifts
            </h3>
            <p className="text-[13px] font-[400]">Our First Product Order</p>
          </div>{' '}
          <div className="col flex items-center flex-col justify-center group w-[20%]">
            <BiSupport className="text-[40px] transition-all duration-300 group-hover:-translate-y-2 group-hover:text-[#ff5252]" />
            <h3 className="text-[16px] font-[600] !mt-3 !mb-2">Support 24/7</h3>
            <p className="text-[13px] font-[400]">Contact us Anytime</p>
          </div>
        </div>
      </div>
      <hr className="h-px bg-[#919191] border-0" />
      <div className="container">
        <div className="footer flex   !pt-8 ">
          <div className="part1 w-[25%] border-r-1 border-[#808080] !pt-4 flex flex-col gap-3.5 ">
            <h2 className="text-[18px]  font-[600]">Contact us</h2>
            <p className=" text-[14px] w-[70%] font-[400] ">
              Classyshop - Mega Super Store 507-Union Trade Centre France
            </p>
            <Link className="link" to="mailto">
              sales@yourcompany.com
            </Link>
            <h3 className="text-[22px] font-[600]  text-[#ff5252]">
              (+91) 9876-543-210
            </h3>
            <span className="flex gap-2.5 items-center w-[200px]">
              <IoChatboxOutline className="text-[60px] font-[600]  text-[#ff5252]" />
              <p className="text-[17px] font-[500] ">
                Online Chat Get Expert Help
              </p>
            </span>
          </div>  
          <div className="part2 w-[20%]  !p-4 !pl-10 flex flex-col gap-3.5 ">
            <h2 className="text-[18px]  font-[600]">Products</h2>
            <ul className="flex flex-col text-[#424242] gap-1">
              <li className="text-[14px]  link">Prices drop</li>
              <li className="text-[14px] link">New products</li>
              <li className="text-[14px] link">Best sales</li>
              <li className="text-[14px] link">Contact us</li>
              <li className="text-[14px] link">Sitemap</li>
              <li className="text-[14px] link">Stores</li>
            </ul>
          </div>
          <div className="part3 w-[20%]  !p-4 !pl-10 flex flex-col gap-3.5 ">
            <h2 className="text-[18px]  font-[600]">Our company </h2>
            <ul className="flex flex-col text-[#424242] gap-1">
              <li className="text-[14px]  link">Delivery</li>
              <li className="text-[14px] link">Legal Notice</li>
              <li className="text-[14px] link">Terms and conditions of use</li>
              <li className="text-[14px] link">About us</li>
              <li className="text-[14px] link"> Secure payment</li>
              <li className="text-[14px] link">Login</li>
            </ul>
          </div>
          <div className="part4 w-[35%]  !p-4 !pl-10 flex flex-col gap-3.5 ">
            <h2 className="text-[18px]  font-[600]">
              Subscribe to newsletter{' '}
            </h2>
            <p className="text-[14px]  text-[#424242]   ">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <form className="!mt-5">
              <input
                type="text"
                placeholder="Your Email Address"
                className="!pr-4 !mb-4 !pl-4 w-full !h-[45px]  border border-[rgba(131,131,131,0.3)] rounded-sm focus:border-[rgba(0,0,0,0.3)] outline-none"
              />
              <Button className="btn-org !w-[20px] !mb-4">Subscribe</Button>

              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label=" I agree to the terms and conditions and the privacy policy"
              />
            </form>
          </div>
        </div>
      </div>
      <hr className="h-px bg-[#919191] !mt-8 m-auto flex justify min-w-[1800px] border-0" />

      <div className="bottomStrip !pt-5 ">
        <div className="container flex items-center justify-between">
          <ul className='flex gap-2 items-center'>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border
            border-[rgba(0,0,0,0.1)] flex items-center justify-center group
            hover:bg-[#ff5252]"><FaFacebookF className="text-[15px]
            group-hover:text-white"/>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border
            border-[rgba(0,0,0,0.1)] flex items-center justify-center group
            hover:bg-[#ff5252]"><FaInstagram className="text-[18px]
            group-hover:text-white"/>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border
            border-[rgba(0,0,0,0.1)] flex items-center justify-center group
            hover:bg-[#ff5252]"><FaPinterestP className="text-[15px]

            group-hover:text-white"/>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border
            border-[rgba(0,0,0,0.1)] flex items-center justify-center group
            hover:bg-[#ff5252]"><AiOutlineYoutube className="text-[18px]
            group-hover:text-white"/>
              </Link>
            </li>
          </ul>
          <p className='text-[14px] text-center'>© 2025 -
          Made with ❤ by Digitalamitchoudhary</p>
          <div className="flex justify-center gap-2">
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/carte_bleue.png" alt="" />  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/visa.png" alt="" />
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/master_card.png" alt="" />
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/american_express.png" alt="" />
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/paypal.png" alt="" />

        </div>
        </div>
        
        
        </div>
    </footer>
  );
}

export default Footer;
