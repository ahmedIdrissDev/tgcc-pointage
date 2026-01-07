import React from 'react'

const Loading = () => {
  return (
    <div className="grid  h-dvh grid-cols-[270px_1fr] ">
    <div className="bg-neutral-200 rounded-md"/>
    <div className='w-full h-full flex animate-pulse flex-col'>
        <div className="grid grid-cols-3 gap-2 h-80">
            <div className="w-full h-full bg-neutral-100 rounded-md"></div>
            <div className="w-full h-full bg-neutral-100 rounded-md"></div>
            <div className="w-full h-full bg-neutral-100 rounded-md"></div>
        </div>
            <div className="grid grid-cols-2 gap-2 h-80">
            <div className="w-full h-full bg-neutral-100 rounded-md"></div>
            <div className="w-full h-full bg-neutral-100 rounded-md"></div>

        </div>
    </div>
    </div>
  )
}

export default Loading