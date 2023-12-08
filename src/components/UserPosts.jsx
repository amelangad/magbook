import React, {useState} from 'react'
import RemoveBtn from '../components/RemoveBtn'
import Button from '../components/Button'
import { FaRegEdit } from "react-icons/fa";
import Link from 'next/link'


export default function UserPosts({  posts, userId, name }) {

const userPosts = posts?.filter(post => post.authorId === userId)
  return (
    <div className="w-full min-h-[50vh] flex flex-col justify-center items-center bg-[#101227] shadow-2xl text-white">
      <h1 className="text-3xl text-white">
        Posts
      </h1>
      <div className="w-full flex flex-col lg:flex-row flex-wrap gap-16 justify-center items-center py-10">
   {userPosts?.map(post => 
     <div key={post._id} className="w-[90%] lg:w-1/4 flex flex-col justify-center items-center lg:items-start bg-[#101230] shadow-xl rounded-md">
     <div className="flex flex-row justify-start gap-5">
       <h1 className=" p-5 text-md underline">{post.title}</h1>
       <p className=" p-5 text-xs ">{name}</p>
     </div>
     <p className="text-slate-500 p-3 text-sm">{post.description}</p>
     <div className=" w-full flex gap-3 justify-end items-center p-10">
       <Link href={`/editPost/${post._id}`}><FaRegEdit size={25} color={"white"} /></Link>
       <RemoveBtn id={post._id} />
     </div> 
      </div>)}
      <Link href="/addedposts"><Button text="See all posts"/></Link>
    </div>
    </div>)}
