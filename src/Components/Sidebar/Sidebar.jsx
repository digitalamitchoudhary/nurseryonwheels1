import React, { useState } from 'react';
import '../Sidebar/Sidebar.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import Button from '@mui/material/Button';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';



function Sidebar() {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

  return (
    <div className="sidebar !py-6">
      <div className="box">
        <h3 className=" w-full mb-3 text-[16px] font-[600] flex items-center !pr-5">
          {' '}
          Shop by Category{' '}
          <Button
            className=" !text-[black] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll !px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electroinc"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box !mt-3">
        <h3 className=" w-full !mb-3 text-[16px] font-[600] flex items-center !pr-5">
          Availability
          <Button
            className=" !text-[black] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto"
            onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}
          >
            {isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailFilter}>
          <div className="scroll !px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock (11)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available (1)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box !mt-3">
        <h3 className=" w-full !mb-3 text-[16px] font-[600] flex items-center !pr-5">
          Size
          <Button
            className=" !text-[black] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll !px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL (17)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box !mt-4 ">
        <h3 className=" w-full !mb-3 text-[16px] font-[600] flex items-center !pr-5">
          {' '}
          Filter By Price
        </h3>

        <RangeSlider />

        <div className="flex !pt-4 !pb-2 priceRange text-[13px]">
          <span>
            From: <strong className="text-dark">Rs:{500}</strong>
          </span>
          <span className="!ml-auto">
            From: <strong className="text-dark">Rs:{5000}</strong>
          </span>
        </div>
      </div>
      <div className="box !mt-4 ">
        <h3 className=" w-full !mb-3 text-[16px] font-[600] flex items-center !pr-5">
           {' '}
          Filter By Rating
        </h3>

        <div className='flex flex-col gap-2'>
        <Rating name="size-small" defaultValue={5} size="small" readOnly />
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <Rating name="size-small" defaultValue={3} size="small" readOnly />
        <Rating name="size-small" defaultValue={2} size="small" readOnly />
        <Rating name="size-small" defaultValue={1} size="small" readOnly />
        </div>  



      </div>
    </div>
  );
}

export default Sidebar;
