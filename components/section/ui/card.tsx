import { ArrowUpRight, ListCollapse } from 'lucide-react'
import React from 'react'
interface Cardtype{
    icon:React.ReactNode ,
    label:string ,
    Number:number ,
    description?:string ,
    hasbutton?:boolean
} 
const Card = ({Number ,icon ,label ,description ,hasbutton}:Cardtype) => {
  return (
        <div className="w-full  bg-white flex flex-col shadow shadow-neutral-100 first:bg-tgcc-500 first:border-0 first:text-white p-2 h-full border border-neutral-200 rounded-md">
            <div className="flex justify-between items-center">
                <span className='font-bold'>{label} </span>
                <span>{icon} </span>
            </div>
            <span className='text-sm opacity-80'>{description} </span>
            <div className="flex justify-center items-center w-full h-[90%] ">
               <h3 className='text-2xl'>{Number}</h3> 
            </div>
            {hasbutton &&
              <button className='w-40 button flex justify-center items-center gap-2 h-12 cursor-pointer rounded-md bg-white text-neutral-950 '> 
              <ArrowUpRight/>
               <span>details</span>
              </button>
            }
        </div>
  )
}

export default Card