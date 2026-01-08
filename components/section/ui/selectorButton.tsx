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
import { EmployeeDataTypes, Project } from '@/types';
import useDatetime from '@/hooks/useDatetime';

const SelectorButton = () => {
   const [ProjectId , setProjectId] = useState('')
   const {data} = useSession()
   const {setdata ,data:employeedaa , setProject} = ContextStoreDataProvider()
    const userId =(data?.user._id || undefined)  as Id<"user">;

    const chantier:Project[] = useQuery(api.function.getProject, { userId }) || [];
    const id = (ProjectId || undefined)  as Id<"Project">;
    const fullDate =new Date().toISOString().split("T")[0]; 

    const employeedata :EmployeeDataTypes[] = useQuery(api.function.fetchEmployees , id ? {id , date:fullDate} :'skip')
    
   useEffect(()=>{
         setdata(employeedata) 
         const chantierSelected = chantier.find(({_id})=> _id===ProjectId)
         setProject(chantierSelected)
   } , [employeedata])
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