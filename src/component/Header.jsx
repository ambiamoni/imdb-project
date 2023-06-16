
import React from 'react'
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link.js';
export default function Header() {
  return (
    <div className='flex justify-between mx-2 sm:mx-auto max-w-6xl items-center py-6'>
      <div className='flex mx-4 lg:mx-6'>
        <MenuItem title='HOME' address='/' Icon={AiFillHome} />
        <MenuItem title='ABOUT' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex ">
        <Link href="/">
          <h2 className="flex text-2xl">
            <span className="font-bold bg-amber-500 rounded-lg px-2 py-1 mr-1">IMDb</span><span className="text-xl hidden sm:inline">Clone</span>
          </h2>

        </Link>
      </div>
    </div>
  )
}


