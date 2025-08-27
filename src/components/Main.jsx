import React from 'react'
import { useNavigate } from 'react-router-dom';
const Main = () => {
  const navigate = useNavigate();

  //for navigate create account page
  const handleCreateAccount = ()=>{
     navigate('/Registration')
  }

  //for login page 
  const handleLoginPage = ()=>{
    navigate('/login');
  }

  return (
    <div className="flex  flex-col h-screen w-[100%] mb-5 justify-end items-center">
      <div className='flex flex-col h-[100%] px-5 justify-end bg-[#f7f9f8]'>
        <div className="flex flex-col gap-5  ">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold py-2 w-[60%]">Welcome to PopX</h1>
          <p className="w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col w-[100%] h-[100%] gap-2 mb-5">
          <button className="bg-[#6c24fe] text-white py-2 rounded" onClick={handleCreateAccount}>
            Create Account
          </button>
          <button className="bg-[#cebbfa] py-2 rounded" onClick={handleLoginPage}>
            Already Registered?Login
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Main
