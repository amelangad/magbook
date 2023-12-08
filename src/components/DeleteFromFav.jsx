import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useResult } from '../context/ResultContext'
import { setCookie } from 'cookies-next';

export default function AddToFav(props) {
  const { fav, setFav, saveToLocalStorage} = useResult();
  const [color, setColor] = useState(props.color);
  const [ text, setText ] = useState(props.text)


  const addToFav = () => {
{
      const newFav = fav.filter(item => item.imdbID !== props.item.imdbID)
      setFav(newFav)
      setCookie('FavList', newFav, {maxAge:31536000})
      saveToLocalStorage('Fav', newFav)
      

    
  }}
  return (
    <button type="submit"
      className="absolute bottom-2 start-[-10.5%] min-w-[250px] h-16 ml-10 gap-3 justify-center items-center bg-[#00000023] text-white"
      onClick={addToFav}>
      <p className ="flex flex-row justify-center items-center gap-3">
        {text}
      <span className=" border-black">
      <AiOutlineDelete color={color} size={25} />
        </span></p>
    </button>
  )
}
