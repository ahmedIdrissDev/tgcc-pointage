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
    <Ellipsis/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='mr-3.5'>
    <DropdownMenuLabel>Mange Article</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Transfert de stock </DropdownMenuItem>
    <DropdownMenuItem>Modifier</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>  )
}

export default Buttonaction