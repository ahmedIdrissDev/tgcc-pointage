import { Search, SearchAlert } from 'lucide-react'
import React from 'react'

const Searchbutton = () => {
  return (
    <div className='flex px-2 h-11 border border-neutral-200 rounded-md  items-center gap-1'>
        <Search/>
        <span>find </span>
    </div>
  )
}

export default Searchbutton