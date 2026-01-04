import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { SearchAlert } from 'lucide-react'

const Employee = () => {
  return (
<div>
<div className="py-2">
  <span>Suivi du pointage Mensuel</span>
</div>
<ScrollArea className="h-96 py-2 flex flex-col space-x-2.5 button w-full rounded-md  ">
   <Alert variant="destructive">
                        <SearchAlert />
                        <AlertTitle>Suivi </AlertTitle>
                        <AlertDescription>
  Merci de valider le pointage mensuel.
                        </AlertDescription>
                </Alert>
      <div className="w-full button mt-2  h-12"></div>
      <div className="w-full button mt-2  h-12"></div>
      <div className="w-full button mt-2  h-12"></div>
      <div className="w-full button mt-2  h-12"></div>
</ScrollArea>
</div>
  )
}

export default Employee