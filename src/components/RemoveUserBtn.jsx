"use client"

import React from 'react'
import { GoTrash } from "react-icons/go";
import { useRouter } from 'next/navigation'

export default function RemoveUserBtm({ id }) {
    const router = useRouter();
    const removeUser = async () => {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            const res = await fetch(`/api/users?id=${id}`, {
                method: 'DELETE',
            });

        if(res.ok)
            router.refresh();
        }
    }
    return (
        <button className="cursor" onClick={removeUser}><GoTrash  size={25} color={"red"} /></button>
    )
}