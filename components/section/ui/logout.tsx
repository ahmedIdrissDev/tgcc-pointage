'use client'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = () => {
  return (
<button onClick={e=> signOut({redirect:true , callbackUrl:'/'})} className='flex px-2 h-11 border border-neutral-200 rounded-md  items-center gap-1'>
        <LogOut/>
        <span>find </span>
    </button>  )
}

export default Logout