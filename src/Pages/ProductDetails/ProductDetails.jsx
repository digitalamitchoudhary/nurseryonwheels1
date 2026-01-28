import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, TextField } from "@mui/material";
import ProductZoom from "../../Components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import "./ProductDetails.css";
import { useState } from "react";
import QuantityBox from "../../Components/QuantityBox/QuantityBox";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import ProductDetailsComponents from "../../Components/ProductDetailsComponents/ProductDetailsComponents";

function ProductDetails() {
  const [productActionIndex, setProductActionIndex] = useState(null);

  const [activeTab, setActiveTab] = useState("description");

  const reviews = Array(10).fill({
    name: "userName",
    date: "date",
    text: "text",
    rating: 5,
  });

  {
    reviews.map((item, index) => (
      <div key={index} className="review ...">
        ...
      </div>
    ));
  }

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
          <div className="w-[60%]">
         <ProductDetailsComponents/>
         </div>
        </div>

        <div className="container !mt-10">
          <h2 className="text-[22px] font-[600] !mb-4">Product Details</h2>
          <div className="flex gap-8">
            <button
              className={`text-[17px] font-[500] ${activeTab === "description" ? "text-primary  !px-4 py-2 rounded-md" : "  text-black px-4 py-2 rounded-md"} hover:text-primary transition-colors`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`text-[17px] font-[500] ${activeTab === "productdetail" ? "text-primary  !px-4 py-2 rounded-md" : "  text-black px-4 py-2 rounded-md"} hover:text-primary transition-colors`}
              onClick={() => setActiveTab("productdetail")}
            >
              Product Details
            </button>
            <button
              className={`text-[17px] font-[500] ${activeTab === "review" ? "text-primary  !px-4 !py-2 rounded-md" : "  text-black px-4 py-2 rounded-md"} hover:text-primary transition-colors`}
              onClick={() => setActiveTab("review")}
            >
              Reviews (0)
            </button>
          </div>
          {activeTab === "description" && (
            <div className="shadow-md w-full !py-5 !px-8 rounded-md text-[14px] bg-gray-50 !mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
          )}{" "}
          {activeTab === "productdetail" && (
            <div className="shadow-md w-full !py-5 !px-8 rounded-md text-[14px] bg-gray-50 !mt-4">
              <p>Product detail content goes here.</p>
              <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                  <thead className="bg-neutral-secondary-soft border-b border-default">
                    <tr>
                      <th
                        scope="col"
                        className="!px-6 !py-3 bg-gray-200  font-semibold"
                      >
                        Product name
                      </th>
                      <th
                        scope="col"
                        className="!px-6 !py-3 bg-gray-200  font-semibold"
                      >
                        Color
                      </th>
                      <th
                        scope="col"
                        className="!px-6 !py-3 bg-gray-200  font-semibold"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="!px-6 !py-3 bg-gray-200  font-semibold"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="!px-6 !py-3 bg-gray-200  font-semibold"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
                      <th
                        scope="row"
                        className="!px-6 !py-4 font-medium text-heading whitespace-nowrap"
                      >
                        Apple MacBook Pro 17&quot;
                      </th>
                      <td className="!px-6 !py-4">Silver</td>
                      <td className="!px-6 !py-4">Laptop</td>
                      <td className="!px-6 !py-4">$2999</td>
                      <td className="!px-6 !py-4">
                        <a
                          href="#"
                          className="font-medium text-fg-brand hover:underline"
                        >
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
                        <a
                          href="#"
                          className="font-medium text-fg-brand hover:underline"
                        >
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
                        <a
                          href="#"
                          className="font-medium text-fg-brand hover:underline"
                        >
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
                        <a
                          href="#"
                          className="font-medium text-fg-brand hover:underline"
                        >
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
                        <a
                          href="#"
                          className="font-medium text-fg-brand hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === "review" && (
            <div className="shadow-md rounded-md w-[80%] !py-5 !px-8 bg-gray-50 !mt-4">
              <p className="!text-[18px] font-bold">
                Customer questions & answers
              </p>

              <div className=" !py-5 !px-8  text-[14px] !mt-4">
                <div className=" scroll  w-full max-h-[300px] !overflow-y-auto !overflow-x-hidden mt-5  productReviwerContainer">
                  {reviews.map((item, index) => (
                    <div key={index} className="riview !pr-6 !mb-2 !pt-2 !pb-5 border-b border-[rgba(0,0,0,0.1)]   flex items-center justify-between">
                      <div className="info w-full flex items-center mb-2 gap-4">
                        <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                          <img
                            src="/user.jpg"
                            alt="user"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="infoText  w-[80%]">
                          <h4 className=" font-[600] text-[16px]">{item.name}</h4>
                          <h5 className="font-[600] text-[13px] mb-0">
                            {item.date}
                          </h5>
                          <p className="mt-0 mb-0 text-[13px]">{item.text}</p>
                        </div>
                      </div>
                      <div className="rate">
                        <Rating
                          name="size-small"
                          size="small"
                          value={item.rating}
                          readOnly
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <br /> <br />
                <div className="reviewForm !bg-[#ffffff] !p-4 rounded-md">
                  <h2 className="text-[18px] font-[600]">Add a review</h2>
                  <br />

                  <form className="w-full !mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Write a review..."
                      className="w-full"
                      name="review"
                      multiline
                      rows={5}
                      placeholder={"Write a reviews"}
                    />

                    <br />
                    <br />
                    <Rating name="size-small" />
                    <div className="flex items-center !mt-5">
                      <Button type="submit" className="btn-org flex gap-2">
                        Submit Review
                      </Button>
                    </div>
                  </form>
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
