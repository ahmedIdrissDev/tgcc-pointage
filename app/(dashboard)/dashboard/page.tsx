import Bord from '@/components/section/bord'
import Employee from '@/components/section/ui/employee'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="p-2.5">
      <h1 className='text-[17px] '>Dashboard</h1>
      <p className='text-sm'>Overview of employees attendance and activity.</p>
    </div>
    <Bord/>
    <div className="p-2">
    <Employee/>
     
    </div>
    </>
  )
}

export default page