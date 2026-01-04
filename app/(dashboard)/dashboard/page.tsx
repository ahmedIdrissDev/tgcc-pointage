import Bord from '@/components/section/bord'
import Employee from '@/components/section/ui/employee'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="p-2.5">
      <h1 className='text-[17px] '>Tableau de bord</h1>
      <p className='text-sm'>Vue d’ensemble de la présence et de l’activité des employé.</p>
    </div>
    <Bord/>
    <div className="p-2 grid gap-2 grid-cols-2">
    <Employee/>
    <div className="w-full h-full ">
      <div className="py-2">
  <span>Pointage des engins</span>
</div>
<div className="w-full bg-tgcc-100/25 h-full button"></div>
    </div>
    </div>
    </>
  )
}

export default page