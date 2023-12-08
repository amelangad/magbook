import React from 'react'
import Link from 'next/link'

export default function UsersList({users}) {

  return (
    <div className = "w-full min-h-[50vh] justify-center items-center">
<p className ="text-white text-3xl font-roboto py-10 flex flex-row justify-center items-center">Look, who is with us</p>
<div className ="flex flex-row flex-wrap gap-10 items-center justify-start mx-[25%] py-20">
{users?.map((user) => (
        <div className =""key={user._id}>
<div className ="text-white text-lg font-roboto flex flex-col items-center justify-center">{user.name}</div>
<Link href ={`/profile/${user._id}`}>
<img src={user.avatar} alt ="avatar" className ="h-16 w-16 rounded-full"/>
</Link>
        </div>))}
        </div>
    </div>
  )
}
