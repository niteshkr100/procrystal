"use client"
import React from 'react'
import { Button } from './ui/button'
import Circle from './Circle'
import Image from 'next/image'
import Footer from "@/components/Footer";

const Selling = () => {
  return (
    <div>
    <div className='h-[900px] mt-10 pt-1 md:pt-16 bg-gradient-to-r from-cyan-200 to-blue-400  relative'>
    <div className='px-4 md:px-14'>
      <div className='my-10 grid grid-cols-1 md:grid-cols-2 z-10'>
        <div className='text-cyan-900 flex flex-col items-start md:items-end  z-10'>
           <div className='mt-0 lg:mt-20'>
            <h2 className='text-[24px] md:text-[36px] text-start md:text-end  md:leading-4 lg:leading-3'>BEST PRICE</h2>
             <h2 className='text-[38px] md:text-[52px] lg:text-[61px] font-bold  text-start md:text-end'>Agate Phone Grip</h2>
           </div>
             <div className='flex items-center gap-2'>
                <h2 className='line-through text-xl text-cyan-600'>44.50$</h2>
                <h2 className='text-red-500 text-[38px] md:text-[52px] lg:text-[58px] font-semibold   '>19.50$</h2>
             </div>
             <div className='text-start mt-1 md:text-end'>
                <h2>These Pop Rock Crystal grip tops can be swapped with </h2>
                <h2>other tops depending on your mood, outfit, nails, </h2>
                <h2> phone case, holiday, etc.! Just gently squeeze the sides </h2>
                <h2>to remove and swap out with another color or design!</h2>
             </div>
             <Button className="mt-6 md:mt-10 p-4 md:py-6 md:px-10 rounded-[14px] font-bold  bg-gradient-to-r from-cyan-300 to-blue-400 hover:shadow-xl hover:scale-105 transition-all ease-in-out">
                     BUY NOW
            </Button>
        </div>
        <div>
            <Circle/>
        </div>
      </div>
      </div>
      <Image src="/selling.png"
        height={400}
        width={1440}
        alt='design'
        className='w-full h-[500px] md:h-auto absolute top-0 z-0'
      />
      <Image/>
      <Image src="/Ellipse.png"
        height={700}
        width={700}
        alt='design'
        className='hidden lg:block md:h-auto absolute top-[14rem] right-0 z-0'
      />
      </div> 
   
    <div>
     
      </div>
      <Footer/>
    </div>
  )
}

export default Selling
