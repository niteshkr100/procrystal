 "use client"
 import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Image from "next/image";
  import React, { useState } from 'react'

// Middle component filter part
const Filter = ({fiObject, defaultobj, typeobj}) => {

 const [filterOne, setFilterOne] = useState(defaultobj);

  return (
    <div className='flex items-center gap-2  max-sm:text-sm   '>
    <label htmlFor="" className='text-slate-400 font-semibold'>{typeobj}:</label>
    <div className='flex gap-2  text-cyan-900  font-semibold'>
    <h2>{filterOne}</h2>
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Image src="/dot.svg"
            alt="dot"
            height={8}
            width={8}
            className="cursor-pointer flex"
            />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuLabel onClick={() => setFilterOne(fiObject.one)}
        className="text-cyan-900 ">{fiObject.one}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setFilterOne(fiObject.two)}
        className="text-cyan-900 ">{fiObject.two}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFilterOne(fiObject.three)}
        className="text-cyan-900 ">{fiObject.three}</DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
</div>
  )
}

export default Filter
