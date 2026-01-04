import React, { useEffect, useState } from 'react'
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
import { ContextStoreDataProvider } from '@/Context';
import { EmployeeDataTypes } from '@/types';
interface SelectorType{
  _id: string;
    _creationTime: number;
    name: string;
    users: string;
}
const SelectorButton = () => {
   const [ProjectId , setProjectId] = useState('')
   const {data} = useSession()
   const {setdata ,data:employeedaa} = ContextStoreDataProvider()
    const userId =(data?.user._id || undefined)  as Id<"user">;
    const chantier:SelectorType[] = useQuery(api.function.getProject, { userId }) || [];
    const id = (ProjectId || undefined)  as Id<"Project">;
    const employeedata :EmployeeDataTypes[] = useQuery(api.function.fetchEmployees , id ? {id} :'skip')
   useEffect(()=>{
         setdata(employeedata)
   } , [employeedata])
   console.log( 'data', employeedaa)
  return (
<Select onValueChange={e=> setProjectId(e)}>
  <SelectTrigger className="">
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