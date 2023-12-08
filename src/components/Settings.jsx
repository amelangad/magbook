"use client"
import { useSession } from "next-auth/react"
import { useState } from 'react'
import { useUser } from '../context/UserContext'
import SignInForm from '@/components/SignInForm'
import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import RemoveUserBtn from '../components/RemoveUserBtn'


export default function Settings({ id, name, email}) {
  const [newName, setNewName] = useState(name)
  const { data: session, update } = useSession();
  const router = useRouter();
  const { img, profile, errMsg, uploadImage} = useUser();

  const editName = async (e) => {
    const newAvatar = img
    const newEmail = email
    e.preventDefault();
    try {
      const res = await fetch(`/api/users/${id}`, {
        body: JSON.stringify({ newName, newEmail, newAvatar }),
        method: 'PUT',
      })
      if (res.ok) {
        console.log
        await update({
          ...session,
          user: {
            ...session?.user,
            name: newName,
          },
        })
        router.refresh('/')
        router.push(`/profile/${id}`)
      }
    }
    catch (err) {
      console.log(err)
    }
  }


  {
    return (
      <div className="max-w-full min-h-[80vh] flex flex-col justify-start items-center bg-[#101230]  ">
        <p className="flex py-10 text-xl lg:text-5xl font-roboto text-white">Hello, <span className="pl-2 font-bold">{name}</span></p>
        <form id ="form" className="w-[90%] lg:w-auto py-10 flex flex-col items-start shadow-2xl bg-[#101227]" onSubmit={editName}>
          <div className="w-full flex flex-col px-10 items-start overflow-hidden">
            <p className="flex text-md lg:text-xl font-small leading-6 text-white font-roboto pb-5 ">What is your name?</p>
            <input type="text"
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border px-2 py-1 focus:outline-none rounded-md text-white bg-[#101230] " />
          </div>
          <div className="w-full flex flex-col px-10 items-start overflow-hidden">
            <p className="flex text-md lg:text-xl font-small leading-6 text-white font-roboto  pt-10 pb-5">Choose your profile photo</p>
            <div className="flex gap-1 text-md font-small leading-6 text-white font-roboto justify-center items-center pb-10">
              <input type="file"
                accept="image/png, image/jpeg"
                onChange={uploadImage}
                className="font-roboto flex flex-col text-white text-md" />
              <img src={profile ? img : '/assets/profile.png'} alt="img" className="w-12 h-12 shadow-3xl rounded-full"></img>
            </div>
            {errMsg}
            <Button text="Edit your data" />
          </div>
        </form>
       <RemoveUserBtn id={id}/>
      </div>
    )
  }

  return (
    <SignInForm />
  )
}