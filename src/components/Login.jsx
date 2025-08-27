import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
//for profile page
const handleProfilePage = ()=>{
  //logic for athentication and authorization
  navigate('/account');
}


  return (
    <div className="flex flex-col w-[100%] h-screen justify-center items-center">
      <div className="flex flex-col gap-5 mx-5 my-5 px-5 bg-[#f7f9f8] h-[100%]">
        <div className=" flex flex-col gap-3 w-[70%]">
          <h1 className="text-3xl font-bold">Signin to your PopX account </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="space-y-6">
          {/* <!-- Email Input --> */}
          <div className="relative border-2 border-gray-300 rounded focus-within:border-gray-400">
            <div className="absolute -top-3 left-3 bg-white px-1">
              <span className="text-sm text-[#9868fd] font-bold">
                Email Address
              </span>
            </div>
            <input
              type="email"
              className="w-full p-2 outline-none bg-transparent"
              placeholder="Enter email address"
            />
          </div>

          {/* <!-- Password Input --> */}
          <div className="relative border-2 border-gray-300 rounded focus-within:border-gray-400">
            <div className="absolute -top-3 left-3 bg-white px-1">
              <span className="text-sm text-[#9868fd] font-bold">Password</span>
            </div>
            <input
              type="email"
              className="w-full p-2 outline-none bg-transparent"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center items-center w-[100%]">
            <button className="bg-[#cacbca] w-[100%] text-white py-2 rounded" onClick={handleProfilePage}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
