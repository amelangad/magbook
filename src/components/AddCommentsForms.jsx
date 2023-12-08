"use client"
import React, { useState } from 'react'
import Button from '@/components/Button'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function AddCommentsForm( id ) {
  const { data: session } = useSession();
 const [ content, setContent ] = useState('');
  const [msg, setMsg] = useState('');
  const router = useRouter();

  async function addComment(e) {
    e.preventDefault();
    const author = session.user.name
    const postId = id.id;
    const res = await fetch('/api/comments', {
      body: JSON.stringify({ author, content, postId }),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }
    }
    )

    if (res.ok)
      console.log(res)
    router.refresh('/')
    setContent('')
    setMsg('Comment added, thanks!')
  
  }
  if (session)
    return (
      <form onSubmit={addComment} className="flex flex-col w-full">
        <label>Author: </label>
        <input type="text"
          name="author"
          value={session.user.name}
          readOnly
          className="flex flex-row w-full focus:outline-none bg-transparent"></input>
        <textarea name="desc"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-3/4 h-full my-5 cursor-text  p-3 border border-slate-600 focus:outline-none bg-transparent resize-none"></textarea>
        <Button type="submit" text="Send" />
        <p className="text-white">{msg ? msg : ''}</p>
      </form>
    )
}
