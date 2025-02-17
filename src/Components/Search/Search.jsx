import React from 'react'
import'./Search.css'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";


function Search() {
  return (
<div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative !p-2">

<input type="text" placeholder='Search for Product....' className='w-full h-[35px] focus:outline-none  !p-2 text-[15px]'/>
<Button className='!absolute !top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[35px] !rounded-full !text-black'>< IoSearch className='text-[22px] text-[#4e4e4e]' />
</Button>

</div>
  )
}

export default Search
