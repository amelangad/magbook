import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="w-full flex flex-row justify-start items-center gap-5 mr-5">
        <p className=" text-white font-roboto font-thin">Signed in as <span className="font-bold pl-1">{session.user.name}</span></p>
        <Link href="/"> <button
          className="w- h-[70%] border-2 text-white border-white bg-slate-900 px-5 py-2 rounded  hover:bg-[#ffffff] hover:text-slate-900 transition-transform font-roboto"
          onClick={() => signOut()}>Sign out</button></Link>
      </div>
    )
  }
  return (
    <>
      <div className="w-full flex flex-row justify-start items-center gap-5 ml-5">
        <p className=" text-white font-roboto font-thin">Not signed up</p>
        <button
          className="w- h-[70%] border-2 text-white border-white bg-slate-900 px-5 py-2 mr-5 rounded  hover:bg-[#ffffff] hover:text-slate-900 transition-transform font-roboto"
          onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  )
}
