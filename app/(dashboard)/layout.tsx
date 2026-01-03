import Navbar from '@/components/section/navgitions/navbar';
import Sidebar from '@/components/section/navgitions/sidebar';
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='grid  h-dvh grid-cols-[270px_1fr] '>
      <Sidebar />
       <div className="w-full bg-tgcc-50/50   h-full">
        <Navbar/>
        <div className="p-2 ">

        {children}
        </div>
       </div>
    </div>
  )
}

export default layout