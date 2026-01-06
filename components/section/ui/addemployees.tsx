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
import Newemployee from '@/components/features/newemployee'
const Addemployees = () => {
  return (
    <div className='w-full bg-tgcc-50 button h-dvh items-center flex flex-col justify-center  '>
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
<Newemployee/>
  </EmptyContent>
</Empty>
        </div>
    </div>
  )
}

export default Addemployees