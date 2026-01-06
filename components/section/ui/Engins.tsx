import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'
import EnginsCard from './enginsCard'

const Engins = () => {
  return (
    <div className="w-full h-full ">
      <div className="py-2">
  <span>Etat des engins</span>
</div>
<ScrollArea className="w-full  h-full button">
    <EnginsCard/>
    <EnginsCard/>
    <EnginsCard/>
    <EnginsCard/>

</ScrollArea>
    </div>  )
}

export default Engins