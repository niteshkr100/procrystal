import React from 'react'
import Image from 'next/image'

const Circle = () => {
  return (
    <div className=''>
      <div className='flex justify-center lg:justify-end mt-10 md:ml-4 md:mt-20 lg:mt-0'>
        
        
          
          {/* Original circle without opacity */}
          <div className=' h-[340px] w-[340px] lg:h-[570px] lg:w-[570px] scircle rounded-full  flex justify-center items-center bg-white z-50 lg:hidden relative  '>
            
            {/* Smaller inner circle */}
            <div className='h-[240px] w-[240px] lg:h-[364px] lg:w-[364px] rounded-full scircle bg-white flex justify-center items-center  z-50 '>
                <Image src="/item.png"
                    width={150}
                    height={150}
                    className='w-[150px] h-[150px]'
                />
            
            </div>
           
          </div>
             {/* inner circle */}
             <div className='incircle absolute h-[200px] w-[400px] lg:h-[364px] lg:w-[364px] rounded-t-full scircle bg-white rotate-180  top-[37rem] md:top-[23rem] flex  bg-opacity-30 z-10 lg:hidden '>
                
            </div>

        {/* Original circle without larger wrapper for large screens */}
        <div className='hidden z-50 lg:flex h-[340px] w-[340px] lg:h-[570px] lg:w-[570px] scircle rounded-full justify-center items-center bg-white'>
          <div className='h-[240px] z-50 w-[240px] lg:h-[364px] lg:w-[364px] rounded-full scircle bg-white flex justify-center items-center'>
          <Image src="/item.png"
                    width={100}
                    height={100}
                    className='w-[250px] h-[250px] object-cover'
                />
          </div>
        </div>

      </div>
    
    </div>
  )
}

export default Circle;
