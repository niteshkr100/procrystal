"use client"

import Image from 'next/image'
import Filter from './Filter'
import { Button } from './ui/button'
import Selling from "@/components/Selling";


const Middle = () => {

    // dropdown one data
  const firstObject = {
    one : "All Products",
    two: "New Products",
    three:"Upcoming Products"
  }

  // dropdown second data
  const SecObject = {
    one : "Best Selling",
    two: "Mega Discount",
    three:"Most Liked"
  }

  return (
    <div>
    <div className='h-[900px]'>
        <div className=' px-4 pt-14 md:pt-6 md:px-14'>
      <div className='flex flex-col items-center'>
      <h2 className='text-[32px] font-bold text-cyan-900 text-center'>All product</h2>
      <hr className='text-center h-1 w-12 bg-gray-300 rounded-md mt-1'/>
      </div>
      
      <div className='my-10 flex  justify-evenly items-center md:gap-10 md:justify-start  lg:gap-20 lg:justify-start'>
       <Filter fiObject={firstObject} defaultobj={firstObject.one} typeobj="Filter" className=" "/>
       <Filter fiObject={SecObject} defaultobj={SecObject.one} typeobj="Sort"/>
      </div>

      <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
        {[1,2,3,4,5,6,7,8].map((value)=>(
            <div  key={value} className='p-8 py-6 md:p-8 md:py-10  hover:shadow-2xl  
            border rounded-3xl mt-3 hover:scale-105 transition-all ease-in-out'>
              
                    <Image src={"/item.png"}
                        height={100}
                        width={200}
                        alt='product'
                        className='mx-auto  object-cover max-sm:w-full'
                    />
                    <h2 className='uppercase text-center max-sm:text-sm'>Crystal Agate Phone Grip 
                    </h2>
                    <h2 className='font-bold text-cyan-700 text-center'>18.99$</h2>
                    <div className='flex justify-center mt-2'>
                    <Button className="mx-6 p-4  md:mx-auto text-center border-2 border-blue-300  md:p-5 md:px-10 rounded-[14px] text-blue-400 bg-white font-bold hover:bg-white hover:border-none hover:shadow-lg hover:bg-gradient-to-r from-cyan-300 to-blue-400 hover:text-white">
                     
                    BUY NOW
                    </Button>
                    </div>
              
            </div>
        ))}
      </div>
      <div className='flex justify-center my-8 md:my-14'>
      <Button className="flex justify-center text-blue-400 font-semibold bg-white border-2 border-blue-300  py-2 px-6 rounded-[12px] hover:bg-white hover:shadow-lg hover:bg-gradient-to-r from-cyan-300 to-blue-400 hover:text-white hover:border-none">View All</Button>
      </div>
      </div>

      <div className=''>
      {/* Selling section after hero */}
      <Selling/>
      
      </div>
      
    </div>
    
    </div>
  )
}

export default Middle
