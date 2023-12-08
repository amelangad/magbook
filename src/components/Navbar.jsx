"use client"

import React from 'react'
import Logo from './Logo'
import LoginBtn from './LoginBtn'
import Profile from './Profile'


export default function Navbar() {

  return (
    <div className="w-full h-16 bg-[#101230] flex justify-between drop-shadow-xl">
      <div className="flex flex-row gap-10 justify-start items-center w-full">
      <Logo />
     <LoginBtn/>
     </div>
      <Profile/>
    </div>
  )
}
