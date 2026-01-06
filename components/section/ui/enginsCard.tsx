import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { CircleCheck } from 'lucide-react';

const EnginsCard = () => {
  return (
    <div className="button mt-2">

<Table className="mt-2">
          <TableBody>
                <TableRow>
                  <TableCell className="font-medium">F72672 </TableCell>
                  <TableCell className="font-medium">Mini chargeuse</TableCell>
                  <TableCell>2000 </TableCell>
                  <TableCell>1 2233</TableCell>
                  <TableHead>
                    <Badge className="w-max p-1.5   h-5 bg-tgcc-500 text-white rounded-full">
                        <CircleCheck size={40}/>
                        <span>Actif</span>
                    </Badge>
                  </TableHead>
                </TableRow>
              
          </TableBody>
        </Table>  
    </div>
        
    )
}

export default EnginsCard