"use client"
import React from 'react'
import FavList from '@/components/FavList'
import AddPostForm from '@/components/AddPostForm'
import { useSession } from 'next-auth/react'
import UserPosts from '@/components/UserPosts'
import OtherPosts from '@/components/OtherPosts'
import { IoMdPersonAdd } from "react-icons/io";
import  AddToFriends  from '../functions/AddToFriends'



export default function UserProfile({ userId, name, email, avatar, posts }) {
  const { data: session } = useSession();

  if (session?.user.email === email)
    return (
      <div className="flex flex-col bg-[#101227]">
        <div className="bg-[#101227] w-full min-h-[80vh] text-white flex flex-row">
          <div className="w-full flex flex-col justify-start items-center py-10 gap-10 ">
            <img src={avatar} className="w-36 h-36 rounded-full"></img>
            <p className="text-2xl font-bold text-white font-roboto">{name}</p>
            <div className=" bg-[#101227] w-full flex justify-center items-center text-white">
              <AddPostForm userId = {userId} name ={name} /></div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <UserPosts userId = {userId} posts={posts} name={name} />
        </div>
        <FavList />
      </div>
    )
  return (
    <div className="flex flex-col bg-[#101227]">
      <div className="bg-[#101227] w-full min-h-[50vh] text-white flex flex-row">
        <div className="w-full flex flex-col justify-start items-center py-10 gap-10 ">
          <img src={avatar} className="w-36 h-36 rounded-full"></img>
          <p className="text-2xl font-bold text-white font-roboto">{name}</p>
        </div>
      </div>
      <div className="w-full">
        <OtherPosts userId = {userId} posts={posts} name={name} />
      </div>
      <FavList />
    </div>
  )
}