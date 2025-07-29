import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "@mui/material";
import ProductZoom from "../../Components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";

function ProductDetails() {
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
                Brands :{" "}
                <span className="font-[500] text-black opacity-75">
                  House of Chikankari
                </span>
              </span>

              <Rating
                name="size-small"
                defaultValue={4.5}
                size="small"
                precision={0.5}
                readOnly
              />
              <span className="text-[#666] cursor-pointer text-[13px]">
                Review(5){" "}
              </span>
            </div>

            <div className="flex items-center gap-3  !mt-4">
              <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
                ₹530
              </span>
              <span className="price text-[#ff5252] text-[20px] font-[600]">
                ₹530
              </span>

              <span className="text-[14px]  text-gray-500">Available In Stock : <span className="text-green-600 text-[14px] font-[600]">147 Items</span></span>
            </div>

            
            <p className="!mt-3 !pr-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum neque rem id, sint nisi consequatur mollitia, consequuntur tenetur optio exercitationem vero officiis aliquid cupiditate temporibus corrupti fuga consectetur suscipit praesentium! In enim sequi facilis nam quibusdam deleniti eos fugit cum optio, quo consectetur totam officiis ipsa eveniet. Itaque, animi ratione!</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
