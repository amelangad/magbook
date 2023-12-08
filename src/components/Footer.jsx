import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className ="relative bg-[#101227] w-full h-full flex flex-col pb-10">
        <div className="h-full flex flex-col lg:flex-row  items-center font-roboto">
              <div className ="w-full lg:w-1/4 min-h-[40vh] text-slate-50 flex flex-col self-enter lg:py-10 items-center justify-center">
                <h2 className ="w-full text:lg lg:text-4xl mb-5 flex justify-center">Contact me</h2>
                <p className ="text:sm lg:text-lg pb-2"> Wodzisław Śląski</p>
                <p className ="text:sm lg:text-lg pb-2">telefon: 535-828-465</p>
                <p className ="text:sm lg:text-lg pb-2">email: slodzinska.magdalena@gmail.com</p>
                <div className ="flex flex-row flex-wrap gap-5 items-center">
                <a href="http://facebook.pl" target="_blank" className ="p-5 mt-10"><FaFacebookSquare size={40} /></a>
                <a href="http://instagram.pl" target="_blank" className ="p-5 mt-10"><FaInstagram size={40} /></a>
                <a href="http://tiktok.pl" target="_blank" className ="p-5 mt-10"><FaTiktok size={30} /></a>
                </div>
            </div>
            <div className ="w-full lg:w-1/2 min-h-[30vh] text-slate-50 flex flex-col items-center lg:items-end justify-center">
            <h2 className ="w-full lg:w-1/3 text-4xl mb-5 flex justify-center lg:items-end">Navigation</h2>
            <div className =" flex flex-wrap lg:flex-nowrapflex-row justify-center lg:justify-end">
                <Link href = "/movies"><Button text='Movies' /></Link>
                <Link href = "/regulamin"><Button text='Regulamin' /></Link>
                <Link href = "/signin"><Button text='Sign In' /></Link>
                <Link href = "/register"><Button text='Register' /></Link>
                </div>
                </div>
        </div>
        <p className ="absolute bottom-0 left-0 flex justify-center items-center text-white bg-transparent  w-full pt-10 lg:py-2 ">&#169; Magda 2023 </p>
        </div>
    )
}
