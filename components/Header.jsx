import { Brackets } from 'lucide-react'
import Image from 'next/image'
import { IoMdBasket } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex justify-between py-10   px-4 md:px-14'>
 
      <div className='flex justify-center items-center gap-2 hover:cursor-pointer'>
       <Image src={"/Frame.svg"}
        height={30}
        width={30}
        alt='logo'
       />
       <h2 className='text-white text-lg'>Pop Rock Crystal</h2>
      </div>

      {/* right part */}
      <div className='flex justify-center items-center gap-20'>
        <div className='hidden md:text-white md:flex gap-12 text-lg mr-20 '>
            <h2  className='hover:cursor-pointer'>Home</h2>
            <h2  className='hover:cursor-pointer'>Shop</h2>
            <h2  className='hover:cursor-pointer'>About Us</h2>
            <h2 className='hover:cursor-pointer' >Help</h2>
        </div>
        <div className='flex items-center gap-2'>
            <div className='w-[20px] h-[20px] flex justify-center rounded-full bg-pink-600 text-white text-sm'>00</div>
            <IoMdBasket className="text-white w-[35px] h-[35px]"/>

        </div>
      </div>
    </div>
  )
}

export default Header
