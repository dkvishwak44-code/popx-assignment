import React from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const navigate = useNavigate();
//after  registration page
const handleRegistrationSubmit = ()=>{
   navigate('/login');
}

  return (
    <div className="flex flex-col w-[100%] h-screen justify-center items-center">
      <div className="flex flex-col gap-5 py-5 justify-between h-[100%] px-5 bg-[#f7f9f8]">
        <div>
          <h1 className="text-3xl w-[60%] mb-5">Create your PopX account</h1>
          <div className="space-y-6">
            {/* full name  text field */}
            <div className="relative border-2 border-gray-300 rounded focus-within:border-gray-400">
              <div className="absolute -top-3 left-3 bg-white px-1">
                <span className="text-sm text-[#9868fd] font-bold">Full Name</span>
              </div>
              <input
                type="email"
                className="w-full p-2 outline-none bg-transparent"
                placeholder="Enter Full Name"
              />
            </div>
            {/*phone number text field */}
            <div className="relative border-2 border-gray-300 rounded focus-within:border-gray-400">
              <div className="absolute -top-3 left-3 bg-white px-1">
                <span className="text-sm text-[#9868fd] font-bold">
                  Phone number
                </span>
              </div>
              <input
                type="email"
                className="w-full p-2 outline-none bg-transparent"
                placeholder="Enter Phone number"
              />
            </div>
            {/* email adress text field */}
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
            {/* password text field */}
            <div className="relative border-2 border-gray-300 rounded focus-within:border-gray-400">
              <div className="absolute -top-3 left-3 bg-white px-1">
                <span className="text-sm text-[#9868fd] font-bold">Password</span>
              </div>
              <input
                type="email"
                className="w-full p-2 outline-none bg-transparent"
                placeholder="Enter password"
              />
            </div>
            {/* company name text field */}
            <div className="relative border-2 border-gray-300 rounded focus-within:border-gray-400">
              <div className="absolute -top-3 left-3 bg-white px-1">
                <span className="text-sm text-[#9868fd] font-bold">
                  Company Name
                </span>
              </div>
              <input
                type="email"
                className="w-full p-2 outline-none bg-transparent"
                placeholder="Enter company name"
              />
            </div>
            <div className="flex  flex-col">
              <div>
                {" "}
                <h1>Are you an Agency?</h1>
              </div>
              <div className="flex  gap-10">
                {" "}
                <label>
                  {" "}
                  <input type="radio" name="radio" className="mx-2" />
                  Yes
                </label>
                <label htmlFor="">
                  <input type="radio" name="radio" className="mx-2" />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-[#6c24fe] w-[100%] py-2 text-white rounded place-self-end" onClick={handleRegistrationSubmit}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
