import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/logo.svg'
import Menu from '../images/burger.svg'

function Nav() {
  const [menu, setMenu] = useState(true);

  return (
    <nav>
      <div className="flex w-full min-h-[50px] px-4 items-center justify-between flex-wrap bg-beige">
        <div className="flex flex-grow">
          <Link href="/">
            <a className="h-[40px] w-[120px] sm:w-[150px] relative"><Image src={Logo} alt="company logo" layout='fill'objectFit='contain' className="cursor-pointer"/></a>
          </Link> 
        </div>
        <div className="hidden sm:flex flex-grow justify-around">
          <Link href="/"><a className="text-purple-dark hover:text-purple">Home</a></Link>
          <Link href="/"><a className="text-purple-dark hover:text-purple">Tutorial</a></Link>
          <Link href="/"><a className="text-purple-dark hover:text-purple">Contact</a></Link>
        </div>
        <div className="flex flex-grow justify-end items-center">
          <button className="btn mr-4 sm:m-0"><span className="text-white font-[Fred]">DOWNLOAD</span></button>
            <button onClick={() => setMenu(!menu)} className="sm:hidden w-[25px] h-[25px] relative" >
              <Image src={Menu} alt="Mobile Menu Selector" layout='fill'objectFit='contain'/>
            </button>
        </div>
      </div>
      {menu && 
       <div className="flex flex-col items-end justify-around w-full h-[20vh] px-4 bg-beige">
          <Link href="/"><a className="text-2xl text-purple-dark hover:text-purple">Home</a></Link>
          <Link href="/"><a className="text-2xl text-purple-dark hover:text-purple">Tutorial</a></Link>
          <Link href="/"><a className="text-2xl text-purple-dark hover:text-purple">Contact</a></Link>
        </div>
      }
    </nav>
  )
}

export default Nav