import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {

  return (
    <div className="flex justify-center items-center ml-5">
      <Link href="/">
        <Image src='/assets/magbook.png'
          height={50}
          width={50}
          alt="profile"
          className="rounded-full" />
      </Link>
    </div>
  )
}
