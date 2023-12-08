"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/Button'
import { useSession } from 'next-auth/react'
import BackBtn from '@/components/BackBtn'


export default function EditPostForm({ title, description, author, id }) {
    const router = useRouter();
    const { data: session } = useSession();

    const [newTitle, setNewTitle] = useState(title)
    const [newAuthor, setNewAuthor] = useState(`${session?.user.name}`)
    const [newDescription, setNewDescription] = useState(description)

    async function editPost(e) {
        e.preventDefault();
        session.user.name = newAuthor
        console.log(newTitle, newAuthor, newDescription)
        const res = await fetch(`/api/posts/${id}`, {
            body: JSON.stringify({ newTitle, newAuthor, newDescription }),
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            }
        }
        )
        if (res.ok)
            console.log(res)
        router.refresh('/');
        router.push(`/profile/${session.user._doc._id}`)

    }

    if (session)
        return (
            <div className="flex flex-col bg-[#101227]">
            <div className="bg-[#101227] w-full min-h-[80vh] text-white flex flex-row">
              <div className="w-full flex flex-col justify-start items-center py-10 gap-10 ">
              <BackBtn/>
                <div className=" bg-[#101227] w-[90%] flex-col md:flex-row flex justify-center items-center text-white">
                <form name="form" onSubmit={editPost}
                        className="flex w-full lg:w-1/3 flex-col gap-3 items-center lg:items-start lg:mx-24 mt-20">
                        <div className="flex flex-col lg:flex-row gap-5 border-b border-slate-600 w-full">
                            <label htmlFor="title">Title:</label>
                            <input type="text"
                                name="title"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className=" w-full focus:outline-none bg-transparent tetx-sm"></input>
                        </div>
                        <div className="flex flex-row gap-5 border-b border-slate-600 w-full lg:w-1/2">
                            <label>Author: </label>
                            <input type="text"
                                name="author"
                                value={session.user.name}
                                readOnly
                                className="w-full focus:outline-none bg-transparent text-sm"></input>
                        </div>
                        <textarea name="description"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="w-full lg:w-2/3 h-full my-5 cursor-text  p-3 border border-slate-600 focus:outline-none bg-transparent resize-none text-sm"></textarea>
                        <Button type="submit" text="Update" />
                    </form>
                    <Link href="/posts"><Button text="See all posts" /></Link>
                    </div>
              </div>
            </div>
          </div>

        )}
