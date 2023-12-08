"use client"

import React, { useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { useSession } from 'next-auth/react'
import AddCommentsForm from '@/components/AddCommentsForms'
import Link from 'next/link'

export default function PostById({ postId, title, description, comments, user, authorId}) {
  const [show, setShow] = useState(false);
  const { data: session } = useSession();

  const postComments = comments.filter(comment => comment.postId === postId)

  if (session)
  return (
    <div className="bg-[#101230] w-full min-h-[80vh] flex flex-col justify-start items-center gap-5 pt-20 text-white">
      <div key={postId} className="w-1/2 flex flex-col justify-start items-start bg-[#282c6d] shadow-xl rounded-md p-10" >
        <div className="w-[80%] flex flex-row justify-between items-center gap-5">
          <h1 className=" p-5 text-md underline">{title}</h1>
          <Link href={`/profile/${authorId}`}>
            <div className = "flex flex-row gap-5">
            <p className=" p-5 text-xs ">{user.name}</p>
            <img src={user.avatar} className="w-12 h-12 rounded-full"></img>
          </div></Link>
        </div>
        <p className="text-slate-500 p-3 text-sm">{description}</p>
      </div>
      <div onClick={() => { setShow((prev) => !prev) }} className="cursor-pointer"><FaRegPlusSquare size={50} /></div>
      <div className={`${show ? 'visible' : 'hidden'} w-1/2 flex justify-center items-center `}><AddCommentsForm id={postId} setShow={setShow} /></div>
      {postComments?.map((comment) => (
        <div className="w-1/4 flex flex-col justify-start items-start bg-[#101230] shadow-xl rounded-md" key={comment._id}>
          <div >
            <div className="flex flex-row justify-start gap-5">
              <h1 className="  p-5 text-xs">{comment.author}</h1>
            </div>
            <p className="text-slate-500 p-3 text-sm">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>

  )
}

