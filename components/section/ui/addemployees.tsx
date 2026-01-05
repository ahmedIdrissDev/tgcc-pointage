import React from 'react'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Icon, Plus, User } from 'lucide-react'
import Button from './button'
const Addemployees = () => {
  return (
    <div className='w-full bg-white button h-dvh items-center flex flex-col justify-center  '>
        <div className="">
            <Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
        <User/>
    </EmptyMedia>
    <EmptyTitle>Nouvel employé</EmptyTitle>
    <EmptyDescription>Ajoutez un nouvel employé et complétez ses informations professionnelles.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <button className="button shadow-none border-0 rounded-md w-40 h-11 bg-tgcc-500 text-white">
         <Plus/>
        Nouvel employé</button>
  </EmptyContent>
</Empty>
        </div>
    </div>
  )
}

export default Addemployees