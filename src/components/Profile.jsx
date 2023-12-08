import React from 'react'
import Link from 'next/link'
import { useUser } from '../context/UserContext'
import { useSession } from "next-auth/react"
import Button from '@/components/Button'

export default function Profile() {
  const { img, profile } = useUser();
  const {data: session }  = useSession();

  if(session)
  return (
    <div className=" w-full flex flex-row gap-5 justify-end items-center mr-5">
      <Link href={`/profile/${session.user._doc._id}`}>
        <img src={profile? img : '/assets/profile.png'}
          alt="profile"
          className="rounded-full w-12 h-12" />
      </Link>
          <Link href={`/editUser/${session.user._doc._id}`}> <Button text="Settings" /></Link>
    </div>
  )
}


