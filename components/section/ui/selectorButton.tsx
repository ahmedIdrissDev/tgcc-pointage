import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSession } from 'next-auth/react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
interface SelectorType{
  _id: string;
    _creationTime: number;
    name: string;
    users: string;
}
const SelectorButton = () => {
   const {data} = useSession()
    const userId =(data?.user._id || undefined)  as Id<"user">;
    const chantier:SelectorType[] = useQuery(api.function.getProject, { userId }) || [];
  return (
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Chantier" />
  </SelectTrigger>
  <SelectContent>
    {chantier.map(({name ,_id} )=>(
      <SelectItem key={_id} value={_id}>{name} </SelectItem>
    ))}
    
  </SelectContent>
</Select>  )
}

export default SelectorButton