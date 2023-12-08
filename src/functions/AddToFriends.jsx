import React, { useState } from 'react'

import { setCookie } from 'cookies-next';
import { FaCheckDouble } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

export default function addToFriends() {
  const [ friends, setFriends] = useState([]);
  const [inFriends, setInFriends] = useState(false)


 const addToFriends = (props) => {
  console.log(friends)
    if (friends.includes(props.item)) {
      const newFriends = friends.filter(item => item._id !== props.item.id )
      setFriends(newFriends)
      setCookie('FriendsList', newFriends, {maxAge:31536000})
      setInFriends(true)
      

    }
    else {
      const newFriends = [...friends, props.item]
      setFriends(newFriends)
      setCookie('FriendsList', newFriends, {maxAge:31536000})
    }
  }
  return (
    <button type="submit"
      className="min-w-[250px] h-16 ml-10 gap-3 justify-center items-center bg-[#00000023] text-white"
      onClick={addToFriends}>
      <span className=" border-black flex justify-center">
      {inFriends? <FaCheckDouble color={"white"} size={35}/> : <IoMdPersonAdd  color={"white"} size={35} />}
        </span>
    </button>
  )
}
