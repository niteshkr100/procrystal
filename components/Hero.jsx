import React from 'react'
import { Button } from './ui/button'
import Image from "next/image";
import Slider from './Slider';

const Hero = () => {
  return (
    <div className='pb-4 z-50 relative'>
    <div className='grid grid-cols-1 pt-1 md:grid-cols-2 px-4 lg:pt-8 md:px-14'>
       <div className='text-white flex flex-col pt-2 md:pt-20'>
            <div className='flex flex-col lg:mt-6 leading-none lg:leading-10'>
               <h2 className='text-[28px] font-medium md:text-[32px] m-1 lg:text-[34px]'>Welcome to</h2>
               <h2 className='text-[32px]  md:text-[52px] lg:text-[56px] font-extrabold'>Pop Rock Crystal Shop!</h2>
            </div>

            <div className='text-cyan-900 mt-8 lg:mt-10'>
            <p className=' flex flex-col'>
            Here you will find unique phone accessories, crystals,
            </p>
            <p>jewelry and more. Free shipping inside the U.S. and our</p>
            <p>  phone grips come with a limited warranty. Enjoy!</p>
            </div>
           
            <div className='mt-10 flex gap-4 items-center justify-start'>
                <Button className="text-md p-6 px-8 rounded-[16px] text-cyan-700 bg-white font-bold hover:bg-white hover:shadow-lg hover:scale-105 transition-all ease-in-out">Shop Now</Button>
                <Button className="text-md p-6 px-8 rounded-[16px] text-cyan-700 bg-transparent shadow-none font-bold hover:bg-white hover:shadow-lg  border-white hover:scale-105 transition-all ease-in-out">
                about us</Button>
            </div>
       </div>
       <Slider/>
      
    </div>
 
   
    </div>
  )
}

export default Hero
