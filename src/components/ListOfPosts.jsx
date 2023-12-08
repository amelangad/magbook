"use client"

import React from 'react'
import BackBtn from './BackBtn'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
export default function ListOfPosts( {posts} ) {

  const { data: session } = useSession();

if (session)
  return (
    <div className="flex flex-col min-h-[80vh] justify-center items-center bg-[#101227] shadow-2xl">
      <BackBtn />
      <h1 className="text-3xl text-white py-10">
        Posts
      </h1>
      <div className="w-[90%] lg:w-2/3 lg:px-0 flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10 text-white p-5">
        {posts?.map((post) => (
            <div key={post._id} className ="w-2/3 flex flex-col justify-start items-start bg-[#101230] shadow-xl rounded-md  p-10">
              <div className="flex flex-row justify-start gap-5">
                <h1 className=" p-5 text-md underline">{post.title}</h1>
              </div>
              <p className="text-slate-500 p-3 text-sm">{post.description}</p>
             <div className =" flex items-end justify-end w-full font-roboto"> 
             <Link href={`/addedposts/${post._id}`} className="bg-white text-[#101230] p-3 flex items-end hover:bg-[#101230] border border-white hover:text-white transition-colors" >
              <p>Go to post</p>
          </Link></div>
            </div>
        
        ))}
      </div>
    </div>
  )
}
