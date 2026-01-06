import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Buttonaction from './ui/button-action'
const Stockitems = () => {
  return (
    <div className='button bg-white p-0'>
       <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[160px]">Réference Article</TableHead>
      <TableHead>Famille 1</TableHead>
      <TableHead>Designation</TableHead>
      <TableHead>stock date</TableHead>

      <TableHead className="text-right">Quantité</TableHead>
      <TableHead className="text-right">Unité</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell >2026-01-16</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
      <TableCell className="text-right">$250.00</TableCell>


      <TableCell className="text-right">
        <Buttonaction/>
      </TableCell>

    </TableRow>
  </TableBody>
</Table> 
    </div>
  )
}

export default Stockitems