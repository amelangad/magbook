import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/Button'
import {useSession} from 'next-auth/react'


export default function AddPostForm({userId, name}) {
    const router = useRouter();
    const {data: session }  = useSession();

const [title, setTitle] = useState('')
const [description, setDescription] = useState('')

    async function addPost(e) {
        e.preventDefault();
        const authorId = userId
        const author = userId
        const res = await fetch('/api/posts', {
            body: JSON.stringify({title, description, author, authorId}),
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        }
        )
        if (res.ok)
        console.log(res)
    setTitle('')
    setDescription('')
    router.refresh('/')

    }

    if (session)
    return (
        <div className ="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/3 bg-transparent justify-center items-center text-white m-3 shadow-lg">
            <form name="form"  onSubmit={addPost}
                className="flex flex-col gap-3 items-start  p-5">
                <div className="flex flex-row gap-5 border-b border-slate-600 :w-1/2">
                    <label htmlFor="title">Title:</label>
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className=" w-full focus:outline-none bg-transparent text-sm"></input>
                </div>
                <div className="flex flex-row  gap-5 border-b border-slate-600 w-1/2">
                    <label>Author: </label>
                    <input type="text"
                        name="author"
                        value={name}
                        readOnly
                        className="w-full focus:outline-none bg-transparent text-sm"></input>
                </div>
                <textarea name="description"
                value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-3/4 h-full my-5 cursor-text  p-3 border border-slate-600 focus:outline-none bg-transparent resize-none text-sm"></textarea>
                     <Button type="submit" text="Send"/>
                    </form>
            </div>
            </div>
    )
}
