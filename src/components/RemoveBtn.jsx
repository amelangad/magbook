"use client"

import React from 'react'
import { GoTrash } from "react-icons/go";
import { useRouter } from 'next/navigation'

export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removePost = async () => {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            const res = await fetch(`/api/posts?id=${id}`, {
                method: 'DELETE',
            });

        if(res.ok)
            router.refresh();
        }
    }
    return (
        <button className="cursor" onClick={removePost}><GoTrash  size={25} color={"red"} /></button>
    )
}
