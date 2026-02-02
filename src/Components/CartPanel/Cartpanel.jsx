import { useContext } from 'react';

import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import { IoClose } from 'react-icons/io5';
import { MyContext } from '../../App';

function Cartpanel() {
  const { open, toggleDrawer } = useContext(MyContext);

  return (
    <div>
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        <div className="w-[400px] h-full !pt-4 ">
          <div className="relative flex items-center !pr-4 !pl-4 !pb-2 border-b  border-gray-300 gap-2 justify-between">
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

          <div className="cartItemsContainer !p-4">




          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Cartpanel;
