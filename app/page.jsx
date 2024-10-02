import Hero from "@/components/Hero";
import Image from "next/image";
import Header from "@/components/Header";
import { LuMouse } from "react-icons/lu";
import Middle from "@/components/Middle";


 

export default function Home() {
  return (
   
    <div>
    <div className="hero relative w-full h-[900px]">
    <Header/>
     <Hero/>
     <Image src="/Vector.svg"
            height={80}
            width={100}
            className='w-full absolute bottom-0 md:bottom-0 z-0'
        />
        <div className="mt-9 flex items-center justify-center gap-2 text-cyan-700 z-50">
        <div className="z-50 hidden md:flex flex-col justify-center items-center">
        <LuMouse className="z-50 h-10 w-6 hidden md:flex justify-center"/>
        <Image src="/dot.svg"
          alt="dot"
          height={4}
          width={4}
          className="hidden md:flex"
        />
        </div>
        <p className="z-50 hidden md:block">Scroll down</p>
        </div>
       
        <div>

        </div>
        </div>
    <Middle/>
   
   </div>
  );
}
