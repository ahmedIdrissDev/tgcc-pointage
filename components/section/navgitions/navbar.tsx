'use client'
import Pointage from '@/components/features/pointage'
import Searchbutton from '@/components/features/search'
import { ArrowUpRight, Files } from 'lucide-react'
import React from 'react'
import SelectorButton from '../ui/selectorButton'

const Navbar = () => {
  return (
    <nav className='flex  justify-end items-center py-3 px-3 h-13 gap-1.5'>
      
    <div className="flex items-center gap-2">
      <SelectorButton/>
      <Searchbutton/>
     
          <Pointage/>
    </div>
    </nav>
  )
}

export default Navbar