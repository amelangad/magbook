import React from 'react'
import Link from 'next/link'
import Button from'@/components/Button'


export default function OtherPosts({ userId, posts, name  }) {

const otherPosts = posts?.filter(post => post.authorId === userId)
  return (
    <div className="w-full min-h-[40vh] flex flex-col flex-wrap justify-center items-center bg-[#101227] shadow-2xl text-white">
      <h1 className="text-3xl text-white">
        Posts
      </h1>
      <div className="w-[90vw] flex flex-row flex-wrap gap-16 justify-center items-center py-10">
      {otherPosts?.map(post => 
     <div key={post._id} className="w-1/4 flex flex-col justify-start items-start bg-[#101230] shadow-xl rounded-md py-16">
     <div className="flex flex-row justify-start gap-5">
       <h1 className=" p-5 text-xl underline">{post.title}</h1>
       <p className=" p-5 text-lg ">{name}</p>
     </div>
     <p className="text-slate-500 p-3">{post.description}</p>
      </div>)}
    </div>
    <Link href="/addedposts"><Button text="See all posts"/>
            </Link>
    </div>)}
