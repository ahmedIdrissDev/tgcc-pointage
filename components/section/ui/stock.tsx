import React from 'react'

const Stock = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className="">
        <h1>Etat de Stock</h1>
      </div>
      <div className=" grid gap-2 grid-cols-[400px_1fr] h-40">
         <div className="w-full h-full flex justify-center items-center button">
          <span>223 in stock</span>
         </div>
         <div className="w-full h-full button"></div>
      </div>
    </div>
  )
}

export default Stock