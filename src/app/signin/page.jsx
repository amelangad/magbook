"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Button from '@/components/Button'
import SignInForm from '@/components/SignInForm'

export default function page() {
const {data: session} = useSession();

if (!session) {
  return (
      <SignInForm/>
  )}
return (
  <div className ="w-full min-h-[60vh] flex flex-col gap-5 justify-center items-center bg-[#101227]">
  <p className ="font-roboto text-lg text-white">You are logged as {session.user.name} ({session.user.email})</p>
  <Link href={`/profile/${session.user._doc._id}`}><Button text="Go to your profile"/></Link>
  </div>
  )
}