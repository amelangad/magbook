"use client"

import React from 'react'
import { FaSearch } from "react-icons/fa";
import {useResult} from '../context/ResultContext'


export default function Searchbar() {
  const {search, setSearch} = useResult();

  return (
    <form className ="flex flex-row w-full h-2/3 gap-2 justify-center pb-20" onSubmit={(e)=> {e.preventDefault()}}>
    <input type="text"
    value={search}
    onChange = {(e) => setSearch(e.target.value)}
    className ="flex justify-center items-center rounded-full text-black outline-none w-1/3 pl-3"/>
    <button type="submit" className=" bg-black rounded-full p-3 flex justify-center items-center text-white"><FaSearch /></button>
    </form>
  )
}
