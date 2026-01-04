'use client'
import { ChevronsUpDown } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React from 'react'

const Userbutton = () => {
  const {data } = useSession()
  const user = data?.user
  return (
    <div className='flex  items-center text-sm p-2 border justify-between cursor-pointer gap-1.5 h-12 bg-tgcc-50 border-neutral-200 rounded-md'>
        <div className="flex items-center gap-1.5">
                <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
                <span> HI {user?.first_name} </span>

        </div>
                <ChevronsUpDown className='text-sm opacity-70'/>
    </div>
  )
}

export default Userbutton