import Navbar from '@/components/stock/navbar'
import Stockitems from '@/components/stock/stock-items'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Navbar/>
      <Stockitems/>
    </div>
  )
}

export default page