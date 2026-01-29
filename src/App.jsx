import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import ProductListing from './Pages/ProductListing/ProductListing';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import { createContext, useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import ProductDetailsComponents from './Components/ProductDetailsComponents/ProductDetailsComponents';
import ProductZoom from './Components/ProductZoom/ProductZoom';

import { IoCloseSharp } from 'react-icons/io5';
import Page404 from './Pages/404/Page404';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/register';

const MyContext = createContext();

function App() {
  const [openproductdetailmodal, setOpenProductDetailModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('lg');

  const handleClose = () => {
    setOpenProductDetailModal(false);
  };

  const value = {
    setOpenProductDetailModal,
  };
  return (
    <>
      <MyContext.Provider value={value}>
        <Header />
        <Routes>
          <Route path={'/'} exact={true} element={<Home />} />
          <Route path={'/products'} exact={true} element={<ProductListing />} />
          <Route path={'/product/:id'} exact={true} element={<ProductDetails />}/>
          <Route path={'/login'} exact={true} element={<Login/>}/>
<Route path={'/register'} exact={true} element={<Register/>}/>
          <Route path="*" exact={true} element={<Page404 />} />
        </Routes>
        <Footer />
      </MyContext.Provider>

      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openproductdetailmodal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productdetailmodal"
      >
        <DialogContent>
          <div className="flex items-center w-full productdetailmodalcontainer relative">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black !absolute !top-[0px] !right-[0px] !bg-[#f1f1f1]"
              onClick={handleClose}
            >
              <IoCloseSharp className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%] !px-3">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] !py-8 !px-8  productcontent">
              <ProductDetailsComponents />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { MyContext };
