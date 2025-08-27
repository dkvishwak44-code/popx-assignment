import React from 'react'
import { FcCamera } from "react-icons/fc";
import src from '../assets/girl.jpg'

const Profile = () => {
  return (
    <div className='w-[100%] h-screen'>
      <div className=' px-3 bg-[#f7f9f8] h-[100%] '>
        <div className='bg-white py-2'>
           <h1 className='text-2xl font-bold'>Account setting</h1>
        </div>
        <div className='flex justify-start items-center gap-5'>
            <div className=' flex justify-center items-center h-[80px] w-[80px] my-4'>
                <img src={src} alt=""  className='rounded-full h-[100%] w-[100%]'/>
                <div className='absolute left-20 top-28'>
                  <FcCamera></FcCamera> 
                </div>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Marry Doe</h1>
                <p>Marry@gmail.com</p>
            </div>
        </div>
        <div className='py-2'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti quae repellat quas ipsa unde eaque, non similique molestiae necessitatibus.
            </p>
        </div>
        <div className='h-[60%] border-y-[1px] border-gray-200'>
        </div>
      </div>
    </div>
  )
}

export default Profile
