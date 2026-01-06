import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Plus } from 'lucide-react'
const Newemployee = () => {
  return (
<Drawer>
  <DrawerTrigger>
     <button className="button shadow-none border-0 rounded-md w-40 h-11 bg-tgcc-600 text-white">
         <Plus/>
        Nouvel employé</button>
  </DrawerTrigger>
  <DrawerContent className='h-[190dvh] rounded-md bg-white '>
    
  </DrawerContent>
</Drawer>  )
}

export default Newemployee