import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-betweens bg-black px-16 fixed top-0 left-0 z-10 border-b-white border-b ">
      <div className="m-3">
        <Image src="./vercel.svg" width={100} height={100} alt="logo" />
      </div>
      <nav className="w-full">
        <ul className="flex justify-end text-white text-xl">
          <li className="m-3">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="m-3">
            <Link href={'/about'}>About</Link>
          </li>
          <li className="m-3">
            <Link href={'/contact'}>Contact</Link>
          </li>
          <li className="m-3">
            <Link href={'/login'}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
