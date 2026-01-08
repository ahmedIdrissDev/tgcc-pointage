import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis, Menu } from 'lucide-react'
const Buttonaction = () => {
  return (
<DropdownMenu>
  <DropdownMenuTrigger>
    <button className='w-11 h-11 button justify-center border-0 bg-tgcc-600 text-white '>
    <Ellipsis/>
    </button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='mr-3.5 border shadow-none'>
    <DropdownMenuItem>Transfert de stock </DropdownMenuItem>
    <DropdownMenuItem>Modifier de stock</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>  )
}

export default Buttonaction