import Bord from '@/components/section/bord'
import Employee from '@/components/section/ui/employee'
import Engins from '@/components/section/ui/Engins'
import Stock from '@/components/section/ui/stock'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="p-2.5">
      <h1 className='text-[17px] '>Tableau de bord</h1>
      <p className='text-sm'>Aperçu global des ressources du chantier.</p>
    </div>
    <Bord/>
    <Stock/>
    <div className="p-2 grid gap-2 grid-cols-2">
    <Employee/>
    <Engins/>
    </div>
    </>
  )
}

export default page