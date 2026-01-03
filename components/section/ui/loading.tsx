import React from 'react'

const Loading = () => {
  return (
    <div className='flex opacity-5 animate-pulse flex-col gap-2'>
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
                <div className="bg-neutral-300 h-7 w-20 rounded-full"></div>
                <div className="bg-neutral-300 h-3 w-70 rounded-full"></div>

            </div>
            <div className="bg-neutral-200 rounded-md h-11 w-36"></div>
        </div>
        <div className="w-full h-40 rounded-md bg-neutral-200"></div>
        <div className="w-full h-14 p-2 rounded-md flex items-center gap-2 bg-neutral-200">
            <div className="bg-neutral-300 rounded-md h-11 w-36"></div>
            <div className="bg-neutral-300 rounded-md h-11 w-36"></div>
            <div className="bg-neutral-300 rounded-md h-11 w-36"></div>
            <div className="bg-neutral-300 rounded-md h-11 w-36"></div>

        </div>

        <div className="w-full h-[50dvh] rounded-md bg-neutral-200"></div>
        
        
    </div>
  )
}

export default Loading