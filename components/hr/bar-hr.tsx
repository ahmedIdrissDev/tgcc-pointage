import React from 'react'
import Doc from './doc'

const  ButtonFiles = () => {
  return (
  <div className="flex w-full  bg-tgcc-950  p-2 rounded-md  gap-2 items-center min-h-10 justify-between">
        <span className="text-white">Manque de stock</span>
        <div className="flex items-center gap-2">
      <Doc/>

        </div>
    </div>  )
}

export default ButtonFiles