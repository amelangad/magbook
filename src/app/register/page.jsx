"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useSession, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';


export default function RegisterPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [data, setData] = useState(
    {
      'name': '',
      'email': '',
      'password': '',
      'avatar': '/assets/profile.png',
    }
  )

  const registerUser = async (e) => {
    e.preventDefault();
    console.log(data)
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if ( res.ok ) {
        router.push('/')
        console.log(data)
      }
      
    }
    catch (err) {
      console.log(err)
    }
  }


  if (!session) {
    return (
      <div className="flex min-h-[60vh] w-full bg-slate-50 items-center justify-center">
        <div className="flex min-h-[60vh] lg:w-1/3 flex-col justify-center my-12  shadow-2xl bg-[#101230] p-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white font-roboto">
              Register for an account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="margin-auto flex flex-col justify-center gap-5" onSubmit={registerUser}>
              <div>
                <div className="mt-1">
                  <Input
                    name="email"
                    type="email"
                    text="Email adress"
                    value={data.email}
                    onChange={(e) => { setData({ ...data, email: e.target.value }) }}/>
                </div>
              </div>
              <div>
                <div className="mt-1">
                  <Input
                  name="name"
                  type="text"
                  text="Username"
                  value={data.name}
                  onChange={(e) => { setData({ ...data, name: e.target.value }) }}/>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                </div>
                <div className="mt-1">
                  <Input
                    name="password"
                    type="password"
                    text="Password"
                    required
                    value={data.password}
                    onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                  />
                </div>
              </div>
              <Button
                type="submit"
                text="Sign Up" />
            </form>
            <p className="mx-auto flex justify-center items-center text-white font-roboto">You already have an account? <span className="underline cursor-pointer pl-2"><Link href="/signin">Sign In</Link></span></p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="w-full min-h-[60vh] flex flex-col gap-5 justify-center items-center bg-[#101227]">
      <p className="font-roboto text-lg text-white">You already have an account.</p>
      <Link href={`/profile/${session.user._doc._id}`}><Button text="Go to your profile" /></Link>
      <Button
        text="Sign out"
        onClick={() => signOut()} />
    </div>
  )
}