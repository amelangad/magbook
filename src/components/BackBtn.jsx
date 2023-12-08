"use client"

import React from 'react'
import Button from '@/components/Button'
import {useRouter} from 'next/navigation'

export default function BackBtn() {
    const router = useRouter();
  return (
    <Button text="Go back"onClick={() => router.back()}/>
  )
}
