import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'


export default function Header() {
  
    return (
        <div className="bg-[#101227] w-full h-[60vh] flex justify-center items-center flex-col gap-10 font-roboto">
            <h1 className="text-white text-5xl flex flex-col items-center">Discover your favorite movies <span className ="m-5">...again</span></h1>
            <Link href = "/register"><Button text='Sign Up' /></Link>
        </div>
    )
}
