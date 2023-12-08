import React from 'react'
import Link from 'next/link'
import { useUser } from '../../context/UserContext'

export default function UploadImg() {
    const { img, profile } = useUser();
  return (
    <div className="bg-slate-50 w-full min-h-[80vh] flex flex-col justify-start items-center py-10">
    <div className ="flex flex-row gap-5">
    <img src={profile? img : '/assets/profile.png'} alt="image" className="w-12 h-12 rounded-full"></img>
    <p className ="text-black text-md flex justify-center items-center">Hello, {session.user.name}</p>
    </div>
   <Link href='/settings'> <Button text="Settings"/></Link>
  </div>
  )
}
