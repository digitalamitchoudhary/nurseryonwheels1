import Button from "@mui/material/Button";
import {
  
  
  InputAdornment,
  IconButton,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  // const showPasswordHandle = () => {
  //   setIsPasswordShow(!isPasswordShow);
  // };
  const showPasswordHandle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="flex w-full !mb-10  !mt-10 justify-center items-center">
        <div className="flex-col flex items-center w-[25%] !pb-10 min-h-[300px] shadow-md bg-white rounded-md !mt-2 !mb-2">
          <h1 className=" w-full text-[18px] text-center !pt-5  font-[600]">
            Login to your account
          </h1>
          <div className="  !mr-1  w-[80%] flex flex-col  !mt-5  !ml-5 ">
            <form className="flex flex-col gap-4" action="">
                            <TextField fullWidth required label="Name" />

              <TextField fullWidth required label="Email" />
              {/* <div className="relative">
                <TextField
                  fullWidth
                  required
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                />

                <Button
                  type="button"
                  className="!absolute top-[10px] right-[10px] !z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                  onClick={showPasswordHandle}
                >
                  {showPassword ? (
                    <IoIosEyeOff className="text-2xl opacity-70" />
                  ) : (
                    <IoIosEye className="text-2xl opacity-70" />
                  )}
                </Button>
              </div> */}
                          <TextField
  fullWidth
  required
  label="Password"
  type={showPassword ? "text" : "password"}
  slotProps={{
    input: {
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            type="button"
            onClick={showPasswordHandle}
            edge="end"
              aria-label={showPassword ? "Hide password" : "Show password"}

          >
            {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
          </IconButton>
        </InputAdornment>
      ),
    },
  }}
/>


              <div className=" flex justify-center ">
                <Button className="btn-org w-full !py-3 !font-[600] flex !text-[14px] gap-1">
                  Register
                </Button>
              </div>
              <div className=" flex justify-center  ">
                <span className="  text-center   text-[15px] text-[#5a5959]">
                      Already have an account? 
                  <span className=" !pl-1  font-[600] text-[#ff5252]"><a href="/login">Login In</a></span>
                </span>
              </div>
              <div className=" flex justify-center ">
                <span className=" font-[500] text-center text-[14px] text-[#5a5959]">
                  Or continue with social account
                </span>
              </div>
           <div className=" flex justify-center ">
                <Button className=" !font-[600] !bg-[#e7e7e7] !py-3 w-full flex items-center justify-center !text-[14px] !text-[#000000] gap-2">
                  <FcGoogle className="!text-[20px]" />
                  Login with Google
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
