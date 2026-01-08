import Navbar from '@/components/demande/nav-bar'
import TableContainer from '@/components/demande/table'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-2'>
    <Navbar/>
    <TableContainer/>
    </div>
  )
}

export default page