import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FcGoogle } from "react-icons/fc";
function Login() {
  return (
    <>
      <div className="flex w-full !mb-10  !mt-10 justify-center items-center">
        <div className="flex-col flex items-center w-[25%] !pb-10 min-h-[300px] shadow-md bg-white rounded-md !mt-2 !mb-2">
          <h1 className=" w-full text-[18px] text-center !pt-5  font-[600]">
            Login to your account
          </h1>
          <div className="  !mr-1  w-[80%] flex flex-col  !mt-5  !ml-5 ">
            <form className="flex flex-col gap-4" action="">
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email"
              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Password"
              />

              <div>
                <span className=" link font-[600] text-[15px] text-[#5a5959]">
                  Forgot Password?
                </span>
              </div>
              <div className=" flex justify-center ">
                <Button className="btn-org w-full !py-2  flex !text-[15px] gap-1">
                  Login
                </Button>
              </div>
              <div className=" flex justify-center ">
                <span className="  text-center text-[15px] text-[#5a5959]">
                  Not Registered? <span className=' font-[600] text-[#ff5252]'>Sign Up</span>
                </span>
              </div>
              <div className=" flex justify-center ">
                <span className=" font-[500] text-center text-[14px] text-[#5a5959]">
                  Or continue with social account
                </span>
              </div>

                    <div className=" flex justify-center ">
                <Button className=" !bg-[#e7e7e7] !py-2 w-full flex items-center justify-center !text-[14px] !text-[#000000] gap-2">
                 <FcGoogle className='!text-[20px]' />
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

export default Login;
