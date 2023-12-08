import React from 'react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className="sm:flex flex-row text-md font-thin gap-6 items-center w-full">
      <Link href="/about" className="text-white relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white hover:before:w-full before:transition-all duration-200">
        About us
      </Link>
      <Link href='/profile' className="text-white relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white hover:before:w-full before:transition-all duration-200">
        My profile
      </Link>
      <a href="#contact" className="text-white relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-white hover:before:w-full before:transition-all duration-200">
       Contact
      </a>
    </div>

  )
}
