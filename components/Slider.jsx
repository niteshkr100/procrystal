"use client"
 
import Image from 'next/image'
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/style.css'
import { Button } from './ui/button';


const Slider = () => {
 
  return (


    <div className='mt-8 lg:mt-4  relative z-30 lg:ml-[100px]'>
       <div> 
            <div className='bg-white shadow-xl z-10 rounded-[40px] h-[300px] w-full md:h-[380px] lg:h-[540px] object-fit flex justify-center items-center relative'  >
        <div className='absolute top-20 left-0 bg-indigo-500 p-2 px-4 rounded-r-lg text-white'>
          New lot
        </div>
        <Image src="/box.png"
            alt='image'
            height={300}
            width={340}
            className='object-fit w-auto h-auto lg:w-[300px] lg:h-[380px]'
        />
        </div>
       </div>
        <div className='flex justify-around items-center mt-5 px-[3rem] md:px-[4rem] lg:px-[10rem] flex-nowrap '>
          <div className='bg-indigo-500 w-4  h-4 p-3 rounded-sm flex items-center justify-center  text-white font-bold hover:cursor-pointer'>←</div>
          {[1,2,3,4,5,6,7].map((value)=>(
            <div key={value} className={`h-3 w-3 hover:cursor-pointer rounded-full ${value == 1 ?"bg-indigo-500" : "bg-indigo-200"}`}>

            </div>
          ))}
          <div className='bg-indigo-500 w-4 hover:cursor-pointer h-4 p-3 rounded-sm flex items-center justify-center  text-white font-bold'>→</div>
        </div>
    </div>
  )
}

export default Slider
