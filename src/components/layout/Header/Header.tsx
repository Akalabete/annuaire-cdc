import React from 'react'
import Nav from './Nav/Nav'
import Image from 'next/image'
import logo from '../../../../public/logo.webp'

export default function Header() {
  return (
    <div>
        <div className='flex  items-center justify-between w-full'>
            <div className='flex flex-row gap-4'>
                <Image src={logo} alt="logo" width={100} height={100} />
            </div>
            <div className="m-4 md:w-4/5 md:mx-auto">
              <Nav />
            </div>
        </div>
    </div>
  )
}

