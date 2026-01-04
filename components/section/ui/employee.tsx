"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { SearchAlert } from "lucide-react";
import { ContextStoreDataProvider } from "@/Context";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
const Employee = () => {
  const { data } = ContextStoreDataProvider();
  const Present =
    data?.filter(
      ({ present, type }) => present == false && type == "Mensuel"
    ) || [];
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
        <Table className="mt-2">
          <TableBody>
            {Present.map(
              ({ number_id, first_name, last_name, type, status }, key) => (
                <TableRow>
                  <TableCell className="font-medium">{number_id} </TableCell>

                  <TableCell className="font-medium">{last_name} </TableCell>
                  <TableCell>{first_name} </TableCell>
                  <TableCell>{type}</TableCell>
                  <TableHead>
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </TableHead>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default Employee;
