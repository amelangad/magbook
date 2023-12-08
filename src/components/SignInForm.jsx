"use client"

import React, { useReducer, useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation'
import { setCookie, getCookie } from 'cookies-next';


export default function SignInForm() {

  const router = useRouter();
  const [errMsg, setErrMsg] = useState('')

  const formReducer = (state, e) => {
    return {
      ...state,
      [e.target.name]: e.target.value,
    }
  }
  const [formData, setFormData] = useReducer(formReducer, {
  })


  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", { password: formData.password, username: formData.email })
      if (res.ok) {
        router.push(`/profile`)
        setCookie('session', { session }, { httpOnly: true })
      }
    }
    catch (err) {
      setErrMsg('Please, type correct data')

    }
  }

  {
    return (
      <>
        <div className="flex min-h-[60vh] w-full bg-slate-50 items-center justify-center">
          <div className="flex min-h-[60vh] lg:w-1/3 flex-col justify-center my-12 shadow-2xl bg-[#101230] p-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              {errMsg}
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white font-roboto">
                Sign In with form
              </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="margin-auto flex flex-col justify-center gap-5" onSubmit={handleSignIn}>
                <div>
                  <div className="mt-1">
                    <Input type="text"
                      text="Username"
                      name="email"
                      onChange={setFormData}
                  />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                  </div>
                  <div className="mt-1">
                    <Input type="password"
                      text="Password"
                      name="password"
                      onChange={setFormData}/>
                  </div>
                </div>
                <Button
                  type="submit"
                  text="Sign In" />
              </form>
              <p className="text-2xl font-bold leading-9 tracking-tight text-white font-roboto">or</p>
              <div className="flex flex-row text-center text-white font-roboto">
                <Button text="with Google" onClick={() => signIn("google")} />
                <Button text="with Facebook" onClick={() => signIn("facebook")} />
              </div>
              <p className="mx-auto flex justify-center items-center text-white font-roboto">Don't have an account? <span className="underline cursor-pointer pl-2"><Link href="/register">Register</Link></span></p>
            </div>
          </div>
        </div>
      </>
    )
  }
}