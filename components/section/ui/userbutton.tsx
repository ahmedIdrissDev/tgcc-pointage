import { ChevronsUpDown } from 'lucide-react'
import React from 'react'

const Userbutton = () => {
  return (
    <div className='flex items-center text-sm p-2 border justify-between cursor-pointer gap-1.5 h-12 bg-tgcc-50 border-neutral-200 rounded-md'>
        <div className="flex items-center gap-1.5">
                <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
                <span>Ahmed Idriss</span>

        </div>
                <ChevronsUpDown/>
    </div>
  )
}

export default Userbutton